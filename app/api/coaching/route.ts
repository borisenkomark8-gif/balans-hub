import { NextResponse } from "next/server";

export const runtime = "nodejs";

const inbox = process.env.COACHING_INBOX?.trim();

const directions = new Set([
  "nutrition",
  "training",
  "weight",
  "glp1",
]);

type Body = {
  name?: string;
  email?: string;
  direction?: string;
  message?: string;
  website?: string;
};

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  if (!inbox) {
    return NextResponse.json(
      { ok: false, error: "inbox_not_configured" },
      { status: 503 },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot for bots
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const direction = clean(body.direction, 40);
  const message = clean(body.message, 4000);

  if (!name || !email || !direction || !message || !directions.has(direction)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const directionLabels: Record<string, string> = {
    nutrition: "Питание и коррекция пищевых привычек",
    training: "Тренировки и физическая активность",
    weight: "Контроль веса и образ жизни",
    glp1: "Поддержка при использовании GLP-1",
  };

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      _replyto: email,
      _subject: `Заявка на сопровождение BALANS — ${directionLabels[direction]}`,
      direction: directionLabels[direction],
      message,
      source: "balans-hub/coaching",
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  const result = (await response.json().catch(() => null)) as
    | { success?: boolean; message?: string }
    | null;

  if (result && result.success === false) {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
