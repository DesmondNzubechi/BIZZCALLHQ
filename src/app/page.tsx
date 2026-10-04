import { Button } from "@/components/ui";
import { ClosingCta } from "@/components/site/ClosingCta";
import { HomeIndustries } from "@/components/site/HomeIndustries";
import { HomeServices } from "@/components/site/HomeServices";
import { HomeWhy } from "@/components/site/HomeWhy";
import { HowItWorks } from "@/components/site/HowItWorks";
import { PageHero } from "@/components/site/PageHero";
import { images } from "@/lib/images";
import { createPageMetadata } from "@/lib/metadata";
import { quoteAction } from "@/lib/site";

export const metadata = createPageMetadata({
  description:
    "Bizcallhq packs, stores, fulfills and moves products for businesses, including Amazon FBA preparation, co-packing, warehousing, fulfillment and logistics.",
});

export default function HomePage() {
  return (
    <>
      <PageHero
        id="home-heading"
        eyebrow="Co-packing · Warehousing · Fulfillment · Logistics · Amazon FBA"
        title="We pack, store, fulfill and move your products."
        support="Bizcallhq handles the operational work behind a product, from packaging and storage through fulfillment, distribution and Amazon FBA."
        image={images.heroes.home}
        imagePosition="68% 42%"
        actions={
          <>
            <Button href={quoteAction.href}>{quoteAction.label}</Button>
            <Button href="/services#amazon-fba" variant="secondary">
              Explore Amazon FBA
            </Button>
          </>
        }
      />
      <HomeServices />
      <HowItWorks variant="compact" />
      <HomeIndustries />
      <HomeWhy />
      <ClosingCta />
    </>
  );
}
