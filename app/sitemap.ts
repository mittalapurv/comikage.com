import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://letscrud.com";
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/packages`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/approach`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 }
  ];
}
