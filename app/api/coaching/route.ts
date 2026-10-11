import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Delivery configuration for the coaching inquiry form.
 * Prefer WEB3FORMS_ACCESS_KEY (public-by-design). Fallback: COACHING_INBOX for FormSubmit.
 */
export async function GET() {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  const inbox = process.env.COACHING_INBOX?.trim();

  if (accessKey) {
    return NextResponse.json({
      provider: "web3forms",
      accessKey,
    });
  }

  if (inbox) {
    return NextResponse.json({
      provider: "formsubmit",
      endpoint: `https://formsubmit.co/ajax/${encodeURIComponent(inbox)}`,
    });
  }

  return NextResponse.json({ error: "inbox_not_configured" }, { status: 503 });
}
