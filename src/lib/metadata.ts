import type { Metadata } from "next";
import { site } from "@/data/site";

const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}, ${site.role}` };

/**
 * Page metadata with Open Graph and Twitter filled in. A page that sets its own
 * `openGraph` replaces the parent's whole object, so every page builds it here.
 */
export function pageMetadata({
  title,
  description = site.description,
  path,
  type = "website",
}: {
  /** Short page title; the root layout's template appends " · Musab Saraswat". */
  title?: string;
  description?: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} — ${site.role}`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      type,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage.url] },
  };
}
