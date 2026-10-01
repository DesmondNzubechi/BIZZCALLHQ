import type { Metadata } from "next";
import { site } from "@/lib/site";

export const rootMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

type PageMetadataInput = {
  title?: string;
  description?: string;
  /** Path beginning with a slash. Used for the canonical URL. */
  path?: string;
};

export function createPageMetadata({
  title,
  description = site.description,
  path = "/",
}: PageMetadataInput = {}): Metadata {
  const pageTitle = title ?? site.title;

  return {
    title: { absolute: pageTitle },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: site.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}
