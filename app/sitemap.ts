import type { MetadataRoute } from "next";

const siteUrl = "https://balans-hub.vercel.app";

const paths = [
  "/",
  "/news",
  "/balans",
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
  const lastModified = new Date("2026-09-28");
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/news" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/balans" || path === "/news" ? 0.8 : 0.6,
  }));
}
