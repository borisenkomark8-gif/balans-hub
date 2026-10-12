"use client";

import { FormEvent, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages/ru";

const directionValues = ["nutrition", "training", "weight", "glp1"] as const;

type Status = "idle" | "sending" | "success" | "error";

type DeliveryConfig =
  | { provider: "web3forms"; accessKey: string }
  | { provider: "formsubmit"; endpoint: string };

function isTruthySuccess(value: unknown) {
  return value === true || value === "true";
}

type Props = {
  locale: Locale;
  t: Messages["coaching"];
};

export default function InquiryForm({ locale, t }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");
  const [config, setConfig] = useState<DeliveryConfig | null>(null);

  const directions = [
    { value: "nutrition", label: t.dir1Title },
    { value: "training", label: t.dir2Title },
    { value: "weight", label: t.dir3Title },
    { value: "glp1", label: t.dir4Title },
  ] as const;

  const directionLabels = Object.fromEntries(directions.map((item) => [item.value, item.label]));

  useEffect(() => {
    let cancelled = false;
    fetch("/api/coaching")
      .then(async (response) => {
        if (!response.ok) throw new Error("config");
        return (await response.json()) as DeliveryConfig;
      })
      .then((value) => {
        if (!cancelled) setConfig(value);
      })
      .catch(() => {
        if (!cancelled) setConfig(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") || "").trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const direction = String(data.get("direction") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (
      !name ||
      !email ||
      !direction ||
      !message ||
      !directionValues.includes(direction as (typeof directionValues)[number])
    ) {
      setStatus("error");
      setErrorText(t.errorFields);
      return;
    }

    if (!config) {
      setStatus("error");
      setErrorText(t.errorUnavailable);
      return;
    }

    setStatus("sending");
    setErrorText("");

    const subject = `BALANS coaching — ${directionLabels[direction]}`;

    try {
      let response: Response;

      if (config.provider === "web3forms") {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: config.accessKey,
            subject,
            from_name: "BALANS Hub",
            replyto: email,
            name,
            email,
            direction: directionLabels[direction],
            message,
            locale,
            botcheck: "",
          }),
        });
      } else {
        const body = new FormData();
        body.set("name", name);
        body.set("email", email);
        body.set("_replyto", email);
        body.set("_subject", subject);
        body.set("direction", directionLabels[direction]);
        body.set("message", message);
        body.set("locale", locale);
        body.set("_template", "table");
        body.set("_captcha", "false");

        response = await fetch(config.endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        });
      }

      const rawText = await response.text();
      let result: { success?: boolean | string; message?: string; ok?: boolean } | null = null;
      try {
        result = JSON.parse(rawText) as {
          success?: boolean | string;
          message?: string;
          ok?: boolean;
        };
      } catch {
        result = null;
      }

      const messageText = String(result?.message || rawText || "").toLowerCase();
      const needsActivation =
        messageText.includes("confirm") ||
        messageText.includes("activate") ||
        messageText.includes("activation") ||
        messageText.includes("check your email");

      if (needsActivation) {
        form.reset();
        setStatus("success");
        return;
      }

      const succeeded =
        response.ok &&
        (isTruthySuccess(result?.success) ||
          result?.ok === true ||
          messageText.includes("thank") ||
          messageText.includes("success") ||
          (!result && response.ok));

      if (!succeeded) {
        setStatus("error");
        setErrorText(t.errorSend);
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorText(t.errorNetwork);
    }
  }

  return (
    <form className="inquiry-form" onSubmit={onSubmit} noValidate>
      <label>
        {t.name}
        <input name="name" type="text" autoComplete="name" required maxLength={120} />
      </label>
      <label>
        {t.email}
        <input name="email" type="email" autoComplete="email" required maxLength={200} />
      </label>
      <label className="inquiry-wide">
        {t.direction}
        <select name="direction" required defaultValue="">
          <option value="" disabled>
            {t.directionPlaceholder}
          </option>
          {directions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="inquiry-wide">
        {t.message}
        <textarea name="message" required maxLength={4000} rows={6} placeholder={t.messagePlaceholder} />
      </label>
      <input
        className="inquiry-honeypot"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="inquiry-actions">
        <button className="primary-action" type="submit" disabled={status === "sending" || !config}>
          {status === "sending" ? t.sending : t.submit}
        </button>
        <p className="inquiry-note">{t.note}</p>
      </div>
      {status === "success" ? (
        <p className="inquiry-feedback inquiry-success" role="status">
          {t.success}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="inquiry-feedback inquiry-error" role="alert">
          {errorText}
        </p>
      ) : null}
    </form>
  );
}
