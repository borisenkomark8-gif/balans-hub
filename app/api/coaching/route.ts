import { contactConfigResponse } from "@/lib/contact/config-response";

export const runtime = "nodejs";

/** Alias kept for existing coaching form clients. */
export async function GET() {
  return contactConfigResponse();
}
