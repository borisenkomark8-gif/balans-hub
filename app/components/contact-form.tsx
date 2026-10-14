"use client";

import { FormEvent, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import {
  fetchDeliveryConfig,
  submitContact,
  type DeliveryConfig,
} from "@/lib/contact/delivery";

type Status = "idle" | "sending" | "success" | "error";

export type ContactFormCopy = {
  name?: string;
  email: string;
  emailOptional?: string;
  topic?: string;
  topicPlaceholder?: string;
  topics?: { value: string; label: string }[];
  message: string;
  messagePlaceholder: string;
  consent: string;
  submit: string;
  sending: string;
  note: string;
  success: string;
  errorFields: string;
  errorConsent: string;
  errorUnavailable: string;
  errorSend: string;
  errorNetwork: string;
};

type Kind = "feedback" | "ask" | "consultation";

type Props = {
  kind: Kind;
  locale: Locale;
  t: ContactFormCopy;
  subjectPrefix: string;
  requireName?: boolean;
  requireEmail?: boolean;
  id?: string;
};

export default function ContactForm({
  kind,
  locale,
  t,
  subjectPrefix,
  requireName = false,
  requireEmail = false,
  id,
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");
  const [config, setConfig] = useState<DeliveryConfig | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchDeliveryConfig(controller.signal).then(setConfig);
    return () => controller.abort();
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
    const topic = String(data.get("topic") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent") === "on";

    if (!consent) {
      setStatus("error");
      setErrorText(t.errorConsent);
      return;
    }

    if (!message || (requireName && !name) || (requireEmail && !email)) {
      setStatus("error");
      setErrorText(t.errorFields);
      return;
    }

    if (kind === "feedback") {
      const allowed = (t.topics || []).map((item) => item.value);
      if (!topic || !allowed.includes(topic)) {
        setStatus("error");
        setErrorText(t.errorFields);
        return;
      }
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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

    const topicLabel =
      kind === "feedback"
        ? (t.topics || []).find((item) => item.value === topic)?.label || topic
        : kind;

    const subject =
      kind === "feedback"
        ? `${subjectPrefix} — ${topicLabel}`
        : `${subjectPrefix}`;

    const fields: Record<string, string> = {
      form: kind,
      message,
    };
    if (name) fields.name = name;
    if (email) fields.email = email;
    if (kind === "feedback") fields.topic = topicLabel;

    try {
      const result = await submitContact(config, {
        subject,
        locale,
        replyTo: email || undefined,
        fields,
      });

      if (!result.ok) {
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
    <form id={id} className="inquiry-form contact-form" onSubmit={onSubmit} noValidate>
      {requireName || t.name ? (
        <label>
          {t.name}
          <input
            name="name"
            type="text"
            autoComplete="name"
            required={requireName}
            maxLength={120}
          />
        </label>
      ) : null}

      <label className={requireName || t.name ? undefined : "inquiry-wide"}>
        {requireEmail ? t.email : t.emailOptional || t.email}
        <input
          name="email"
          type="email"
          autoComplete="email"
          required={requireEmail}
          maxLength={200}
        />
      </label>

      {kind === "feedback" && t.topics ? (
        <label className="inquiry-wide">
          {t.topic}
          <select name="topic" required defaultValue="">
            <option value="" disabled>
              {t.topicPlaceholder}
            </option>
            {t.topics.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      ) : null}

      <label className="inquiry-wide">
        {t.message}
        <textarea
          name="message"
          required
          maxLength={4000}
          rows={6}
          placeholder={t.messagePlaceholder}
        />
      </label>

      <label className="inquiry-wide inquiry-consent">
        <input name="consent" type="checkbox" required />
        <span>{t.consent}</span>
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
