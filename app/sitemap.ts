import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://svoboda-efa.vercel.app";
  const now = new Date().toISOString();
  const urls = ["", "/omne", "/efa", "/kontakt", "/kalkulacky", "/sluzby/hypoteky", "/sluzby/investice", "/sluzby/renta"];
  return urls.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}
