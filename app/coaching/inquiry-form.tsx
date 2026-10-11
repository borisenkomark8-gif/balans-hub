"use client";

import { FormEvent, useState } from "react";

const directions = [
  { value: "nutrition", label: "Питание и коррекция пищевых привычек" },
  { value: "training", label: "Тренировки и физическая активность" },
  { value: "weight", label: "Контроль веса и образ жизни" },
  { value: "glp1", label: "Поддержка при использовании GLP-1" },
] as const;

type Status = "idle" | "sending" | "success" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorText("");

    try {
      const response = await fetch("/api/coaching", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          direction: data.get("direction"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.ok) {
        setStatus("error");
        setErrorText(
          result?.error === "inbox_not_configured"
            ? "Форма временно недоступна. Напишите, пожалуйста, позже."
            : "Не удалось отправить заявку. Проверьте поля и попробуйте ещё раз.",
        );
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
        <button className="primary-action" type="submit" disabled={status === "sending"}>
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
      {status === "error" ? (
        <p className="inquiry-feedback inquiry-error" role="alert">
          {errorText}
        </p>
      ) : null}
    </form>
  );
}
