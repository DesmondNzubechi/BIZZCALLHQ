import { Button, Heading, Section, SiteImage } from "@/components/ui";

import { images } from "@/lib/images";

import { quoteAction } from "@/lib/site";

import styles from "./AmazonFba.module.css";

const capabilities = [
  "Amazon FBA",
] as const;

export function AmazonFba() {
  return (
    <Section
      id="amazon-fba"
      spacing="compact"
      aria-labelledby="amazon-fba-heading"
      className={styles.section}
    >
      <article className={styles.panel}>
        <div className={styles.copy}>
          <p className={`type-caption ${styles.eyebrow}`}>
            Featured service
          </p>

          <Heading id="amazon-fba-heading" level={2}>
            Amazon FBA
          </Heading>

          <p className={`type-body-lg ${styles.lead}`}>
            We purchase products wholesale from brands and sell them through
            Amazon FBA.
          </p>

          <p className={styles.support}>
            Amazon FBA is part of the wider co-packing, warehousing,
            fulfillment and logistics operation.
          </p>

          <ul className={styles.capabilities}>
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <SiteImage
          image={images.services.amazonFba}
          ratio="3 / 2"
          sizes="(min-width: 64rem) 34rem, 100vw"
          className={styles.media}
        />
      </article>
    </Section>
  );
}