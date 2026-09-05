import type { MetadataRoute } from "next";

const routes = ["", "/projects", "/recruitment", "/members"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cornellwebdev.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
