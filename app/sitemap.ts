import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";

const siteUrl = "https://balans-hub.vercel.app";

const hubPaths = ["", "/news", "/coaching", "/balans", "/feedback", "/ask", "/services"];

const balansPaths = [
  "/balans/assessment",
  "/balans/control",
  "/balans/progress",
  "/balans/learn",
  "/balans/train",
  "/balans/clinical",
  "/balans/clinical-arrhythmias",
  "/balans/clinical-asthma",
  "/balans/clinical-children-adolescents",
  "/balans/clinical-copd",
  "/balans/clinical-diabetes-type-2",
  "/balans/clinical-hypertension",
  "/balans/clinical-ischemic-heart-disease",
  "/balans/clinical-post-mi-stroke",
  "/balans/clinical-spine-joints-sarcopenia",
  "/balans/nutrition-child-by-age",
  "/balans/train-child-by-age",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-14");
  const paths = [...hubPaths, ...balansPaths];

  return locales.flatMap((locale) =>
    paths.map((path) => {
      const urlPath = path === "" ? `/${locale}` : `/${locale}${path}`;
      return {
        url: `${siteUrl}${urlPath}`,
        lastModified,
        changeFrequency: path === "" || path === "/news" ? "weekly" : "monthly",
        priority:
          path === ""
            ? 1
            : path === "/balans" || path === "/news" || path === "/coaching"
              ? 0.8
              : 0.6,
      };
    }),
  ) as MetadataRoute.Sitemap;
}
