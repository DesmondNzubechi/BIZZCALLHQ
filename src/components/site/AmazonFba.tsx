import { Button, Heading, Section, SiteImage } from "@/components/ui";
import { images } from "@/lib/images";
import { quoteAction } from "@/lib/site";
import styles from "./AmazonFba.module.css";

const capabilities = [
  "FBA labeling",
  "Product prep",
  "Kitting and bundling",
  "Shipments to Amazon",
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
          <p className={`type-caption ${styles.eyebrow}`}>Featured service</p>
          <Heading id="amazon-fba-heading" level={2}>
            Amazon FBA
          </Heading>
          <p className={`type-body-lg ${styles.lead}`}>
            Inventory for Amazon FBA is prepared, labeled and packed so it is
            ready to move into Amazon fulfillment centers.
          </p>
          <p className={styles.support}>
            Bizcallhq handles the prep work sellers need before stock enters
            Amazon&apos;s network, alongside the broader co-packing,
            warehousing, fulfillment and logistics operation.
          </p>
          <ul className={styles.capabilities}>
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button href={quoteAction.href} variant="secondary" className={styles.cta}>
            {quoteAction.label}
          </Button>
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
