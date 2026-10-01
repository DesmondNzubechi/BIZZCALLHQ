import { HowItWorks } from "@/components/site/HowItWorks";
import { Industries } from "@/components/site/Industries";
import { PageHero } from "@/components/site/PageHero";
import { Services } from "@/components/site/Services";
import { images } from "@/lib/images";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services | Co-Packing, Warehousing, Fulfillment and Logistics | Bizcallhq",
  description:
    "Co-packing, warehousing, fulfillment and logistics from Bizcallhq, run as one sequence from receiving products through to delivery.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        id="services-heading"
        eyebrow="Services"
        title="From packaging to delivery, we handle the operation."
        support="Bizcallhq provides connected operational services for businesses that need products prepared, stored, fulfilled and moved."
        image={images.heroes.services}
        imagePosition="center"
      />
      <Services />
      <HowItWorks />
      <Industries />
    </>
  );
}
