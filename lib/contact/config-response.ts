import { NextResponse } from "next/server";

export function contactConfigResponse() {
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
