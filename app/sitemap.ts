import type { MetadataRoute } from "next";
import { stories } from "@/lib/stories";

const origin = "https://svoboda-efa.cz";

// Only indexable, canonical public pages. Do not fabricate lastModified dates
// on every build/request – Google may treat such signals as unreliable.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; frequency: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, frequency: "weekly" },
    { path: "/sluzby/hypoteky", priority: 0.9, frequency: "monthly" },
    { path: "/hypoteka", priority: 0.9, frequency: "monthly" },
    { path: "/investice", priority: 0.8, frequency: "monthly" },
    { path: "/renta", priority: 0.8, frequency: "monthly" },
    { path: "/kontakt", priority: 0.8, frequency: "monthly" },
    { path: "/efa", priority: 0.6, frequency: "monthly" },
    { path: "/investice/historicke-vynosy", priority: 0.6, frequency: "monthly" },
  ];
  return [
    ...pages.map(({ path, priority, frequency }) => ({
      url: new URL(path, origin).toString(),
      priority,
      changeFrequency: frequency,
    })),
    ...stories.map((story) => ({
      url: new URL(`/pribehy/${story.slug}`, origin).toString(),
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];
}
