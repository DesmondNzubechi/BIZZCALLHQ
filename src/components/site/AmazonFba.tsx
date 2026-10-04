import { Button, Heading, Section, SiteImage } from "@/components/ui";

import { images } from "@/lib/images";

import { quoteAction } from "@/lib/site";

import styles from "./AmazonFba.module.css";

const capabilities = [
  // "Amazon FBA product sourcing",
  // "Inventory management",
  // "Warehousing and fulfillment",
  // "Shipping to Amazon fulfillment centers",
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
            We support brands and wholesalers supplying products for Amazon
            FBA, connecting product sourcing, inventory handling and logistics
            to keep stock moving efficiently.
          </p>

          <p className={styles.support}>
            Bizcallhq manages the movement of products from suppliers and
            warehouses to Amazon fulfillment centers, supported by our wider
            warehousing, fulfillment and logistics operations.
          </p>

          <ul className={styles.capabilities}>
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* <Button
            href={quoteAction.href}
            variant="secondary"
            className={styles.cta}
          >
            {quoteAction.label}
          </Button> */}
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