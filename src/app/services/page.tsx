import { AmazonFba } from "@/components/site/AmazonFba";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Industries } from "@/components/site/Industries";
import { PageHero } from "@/components/site/PageHero";
import { Services } from "@/components/site/Services";
import { images } from "@/lib/images";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title:
    "Services | Amazon FBA, Co-Packing, Warehousing, Fulfillment and Logistics | Bizcallhq",
  description:
    "Amazon FBA, co-packing, warehousing, fulfillment and logistics from Bizcallhq, run as one sequence from receiving products through to delivery.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        id="services-heading"
        eyebrow="Services"
        title="From packaging to delivery, we handle the operation."
        support="Bizcallhq provides Amazon FBA alongside connected operational services for businesses that need products prepared, stored, fulfilled and moved."
        image={images.heroes.services}
        imagePosition="center"
      />
      <AmazonFba />
      <Services />
      <HowItWorks />
      <Industries />
    </>
  );
}
