import { NextResponse } from "next/server";
import { balansAppUrlForSlug } from "@/lib/balans-app";
import { isLocale } from "@/lib/i18n/config";
import { isBalansPageName } from "@/lib/serve-balans-page";

export const dynamic = "force-dynamic";

/** Legacy Hub tool URLs redirect into the live BALANS app. */
export async function GET(
  _request: Request,
  context: { params: Promise<{ locale: string; slug: string }> },
) {
  const { locale, slug } = await context.params;
  if (!isLocale(locale) || !isBalansPageName(slug)) {
    return new Response("Not Found", { status: 404 });
  }
  return NextResponse.redirect(balansAppUrlForSlug(locale, slug), 308);
}
