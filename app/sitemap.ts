import { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${baseUrl}/images/logo.png`],
    },
    {
      url: `${baseUrl}/brief`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
