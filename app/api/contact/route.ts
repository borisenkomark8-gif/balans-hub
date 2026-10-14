import { contactConfigResponse } from "@/lib/contact/config-response";

export const runtime = "nodejs";

/**
 * Delivery configuration for contact forms (feedback, ask, consultation, coaching).
 * Prefer WEB3FORMS_ACCESS_KEY. Fallback: COACHING_INBOX for FormSubmit.
 */
export async function GET() {
  return contactConfigResponse();
}
