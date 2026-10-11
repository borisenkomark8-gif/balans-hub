"use client";

import { FormEvent, useEffect, useState } from "react";

const directions = [
  { value: "nutrition", label: "Питание и коррекция пищевых привычек" },
  { value: "training", label: "Тренировки и физическая активность" },
  { value: "weight", label: "Контроль веса и образ жизни" },
  { value: "glp1", label: "Поддержка при использовании GLP-1" },
] as const;

const directionLabels: Record<string, string> = Object.fromEntries(
  directions.map((item) => [item.value, item.label]),
);

type Status = "idle" | "sending" | "success" | "error" | "activate";

type DeliveryConfig =
  | { provider: "web3forms"; accessKey: string }
  | { provider: "formsubmit"; endpoint: string };

function isTruthySuccess(value: unknown) {
  return value === true || value === "true";
}

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");
  const [config, setConfig] = useState<DeliveryConfig | null>(null);

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

    if (!name || !email || !direction || !message || !directionLabels[direction]) {
      setStatus("error");
      setErrorText("Заполните все поля формы.");
      return;
    }

    if (!config) {
      setStatus("error");
      setErrorText("Форма временно недоступна. Напишите, пожалуйста, позже.");
      return;
    }

    setStatus("sending");
    setErrorText("");

    const subject = `Заявка на сопровождение BALANS — ${directionLabels[direction]}`;

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
        setStatus("activate");
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
        setErrorText("Не удалось отправить заявку. Проверьте поля и попробуйте ещё раз.");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorText("Не удалось отправить заявку. Проверьте соединение и попробуйте ещё раз.");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={onSubmit} noValidate>
      <label>
        Имя
        <input name="name" type="text" autoComplete="name" required maxLength={120} />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required maxLength={200} />
      </label>
      <label className="inquiry-wide">
        Интересующее направление
        <select name="direction" required defaultValue="">
          <option value="" disabled>
            Выберите направление
          </option>
          {directions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="inquiry-wide">
        Сообщение
        <textarea
          name="message"
          required
          maxLength={4000}
          rows={6}
          placeholder="Кратко опишите запрос, цели и удобный формат связи"
        />
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
        <button
          className="primary-action"
          type="submit"
          disabled={status === "sending" || !config}
        >
          {status === "sending" ? "Отправляем…" : "Отправить заявку"}
        </button>
        <p className="inquiry-note">
          Ответ придёт на указанный email. Заявка не является записью на медицинский приём.
        </p>
      </div>
      {status === "success" ? (
        <p className="inquiry-feedback inquiry-success" role="status">
          Заявка отправлена. Я свяжусь с вами после просмотра сообщения.
        </p>
      ) : null}
      {status === "activate" ? (
        <p className="inquiry-feedback inquiry-success" role="status">
          Заявка принята. Откройте письмо от FormSubmit на адресе владельца проекта и подтвердите
          активацию — после этого заявки будут доставляться сразу.
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
