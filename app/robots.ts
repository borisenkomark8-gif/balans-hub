import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://balans-hub.vercel.app/sitemap.xml",
    host: "https://balans-hub.vercel.app",
  };
}
