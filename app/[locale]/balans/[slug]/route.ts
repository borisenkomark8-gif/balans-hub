import { serveBalansPageFromParams } from "@/lib/serve-balans-page";
import { locales } from "@/lib/i18n/config";
import { isBalansPageName } from "@/lib/serve-balans-page";

export const dynamic = "force-static";

const slugs = [
  "assessment",
  "control",
  "progress",
  "learn",
  "train",
  "clinical",
  "clinical-arrhythmias",
  "clinical-asthma",
  "clinical-children-adolescents",
  "clinical-copd",
  "clinical-diabetes-type-2",
  "clinical-hypertension",
  "clinical-ischemic-heart-disease",
  "clinical-post-mi-stroke",
  "clinical-spine-joints-sarcopenia",
  "nutrition-child-by-age",
  "train-child-by-age",
] as const;

export function generateStaticParams() {
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ locale: string; slug: string }> },
) {
  const { locale, slug } = await context.params;
  if (!isBalansPageName(slug)) {
    return new Response("Not Found", { status: 404 });
  }
  return serveBalansPageFromParams(locale, slug);
}
