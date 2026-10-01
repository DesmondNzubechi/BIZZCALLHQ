import { About } from "@/components/site/About";
import { PageHero } from "@/components/site/PageHero";
import { images } from "@/lib/images";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Bizcallhq | Product Operations and Logistics",
  description:
    "Bizcallhq approaches product operations as one flow: receive, prepare, store, fulfill and deliver, with the work shaped around each business.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        id="about-heading"
        eyebrow="About Bizcallhq"
        title="The operational partner behind your products."
        support="Bizcallhq takes on packaging, storage, fulfillment and distribution as one operation, so a business can stay with the product and its customers."
        image={images.heroes.about}
        imagePosition="72% center"
      />
      <About />
    </>
  );
}
