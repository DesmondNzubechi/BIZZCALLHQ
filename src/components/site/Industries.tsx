import { Button, Grid, Heading, Icon, Section, SiteImage } from "@/components/ui";
import { images, type ImageAsset } from "@/lib/images";
import { quoteAction, sectionIds } from "@/lib/site";
import styles from "./Industries.module.css";

type Industry = {
  name: string;
  description: string;
  image: ImageAsset;
};

const featured: Industry = {
  name: "Consumer Goods",
  description:
    "Packaging, storage and distribution for physical products that need to be prepared and moved.",
  image: images.industries.consumerGoods,
};

const industries: readonly Industry[] = [
  {
    name: "E-commerce",
    description:
      "Orders are picked, packed and prepared so the products can leave for customers.",
    image: images.industries.ecommerce,
  },
  {
    name: "Retail",
    description:
      "Stock is kept organized and moved so packaged goods can go on to stores or customers.",
    image: images.industries.retail,
  },
];

export function Industries() {
  return (
    <Section
      id={sectionIds.industries}
      surface="muted"
      aria-labelledby="industries-heading"
    >
      <div className={styles.intro}>
        <p className={`type-caption ${styles.eyebrow}`}>Industries we support</p>
        <Heading id="industries-heading" level={2}>
          Built around the needs of your business.
        </Heading>
        <p className={`type-body-lg measure ${styles.support}`}>
          Different businesses need different handling. Packaging, storage,
          fulfillment and logistics are shaped around the products each
          business moves.
        </p>
      </div>

      <article className={styles.featured}>
        <SiteImage
          image={featured.image}
          ratio="3 / 2"
          sizes="(min-width: 64rem) 42rem, 100vw"
          className={styles.visual}
        />
        <div className={styles.copy}>
          <Heading level={3}>{featured.name}</Heading>
          <p className={styles.description}>{featured.description}</p>
        </div>
      </article>

      <Grid columns={1} tablet={2} gap="lg" className={styles.grid}>
        {industries.map((industry) => (
          <article key={industry.name} className={styles.item}>
            <SiteImage
              image={industry.image}
              ratio="3 / 2"
              sizes="(min-width: 64rem) 34rem, (min-width: 48rem) 46vw, 100vw"
              className={styles.visual}
            />
            <div className={styles.copy}>
              <Heading level={3}>{industry.name}</Heading>
              <p className={styles.description}>{industry.description}</p>
            </div>
          </article>
        ))}
      </Grid>

      <div className={styles.follow}>
        <p className={styles.followTitle}>Have a different operation in mind?</p>
        <p className={styles.followText}>
          Tell us what you need and we&apos;ll discuss how Bizcallhq can support
          it.
        </p>
        <Button href={quoteAction.href} className={styles.followAction}>
          {quoteAction.label}
          <Icon name="arrowRight" size={18} />
        </Button>
      </div>
    </Section>
  );
}
