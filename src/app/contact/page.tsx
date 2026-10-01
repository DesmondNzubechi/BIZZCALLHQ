import { PageHero } from "@/components/site/PageHero";
import { Quote } from "@/components/site/Quote";
import { images } from "@/lib/images";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact Bizcallhq | Request a Quote",
  description:
    "Tell Bizcallhq what you need across packaging, storage, fulfillment or logistics, and request a quote.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        id="contact-heading"
        eyebrow="Contact"
        title="Let's talk about your product operation."
        support="Tell us what you need help with across packaging, storage, fulfillment, or logistics."
        image={images.heroes.contact}
        imagePosition="center 42%"
      />
      <Quote />
    </>
  );
}
