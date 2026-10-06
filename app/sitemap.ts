import type { MetadataRoute } from "next";
import { stories } from "@/lib/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...stories.map(story => ({ url: `https://svoboda-efa.cz/pribehy/${story.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: "https://svoboda-efa.cz/sluzby/hypoteky", changeFrequency: "monthly", priority: 0.9 },
    {
      url: "https://svoboda-efa.cz",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://svoboda-efa.cz/hypoteka",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://svoboda-efa.cz/investice",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://svoboda-efa.cz/renta",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://svoboda-efa.cz/kontakt",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
