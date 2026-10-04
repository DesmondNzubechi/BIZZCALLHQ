/**
 * Site-wide facts, information architecture, and metadata defaults.
 * Navigation labels and section ids live here so later UI can share them
 * without inventing a second structure.
 */

export const site = {
  name: "Bizcallhq",
  title: "Bizcallhq | Co-Packing, Warehousing, Fulfillment, Logistics and Amazon FBA",
  description:
    "Bizcallhq provides co-packing, warehousing, fulfillment, logistics, and Amazon FBA preparation for businesses that need reliable day-to-day operations.",
  /** Confirmed production origin. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bizcallhq.com",
  email: "info@bizcallhq.com",
  locale: "en_US",
} as const;

export const sectionIds = {
  services: "services",
  howItWorks: "how-it-works",
  industries: "industries",
  about: "about",
  contact: "contact",
  quote: "quote",
} as const;

export type NavItem = {
  label: string;
  href: string;
  /**
   * Optional child links. When present, the header shows a short menu.
   * Leave this unset for a single destination. One level only.
   */
  items?: readonly Omit<NavItem, "items">[];
};

export const navigation: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const quoteAction = {
  label: "Get a Quote",
  href: "/contact",
} as const;

/** Featured Amazon FBA offer. Anchors to the Services page highlight. */
export const amazonFbaService = {
  label: "Amazon FBA",
  href: "/services#amazon-fba",
  summary:
    "We purchase wholesale products from brands and sell them through Amazon FBA.",
} as const;

/** Core operational stages on the Services page. */
export const coreServices = [
  { label: "Co-Packing", href: "/services#co-packing" },
  { label: "Warehousing", href: "/services#warehousing" },
  { label: "Fulfillment", href: "/services#fulfillment" },
  { label: "Logistics", href: "/services#logistics" },
] as const;

/** Service anchors for the footer. Amazon FBA leads so it stays visible. */
export const footerServices = [amazonFbaService, ...coreServices] as const;

export const footerCompany = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

/** Confirmed contact details. Phone and social accounts are not available yet. */
export const contactDetails: readonly {
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
];

export const legalLinks: readonly { label: string; href: string }[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];
