import Link from "next/link";
import { Heading, Section } from "@/components/ui";
import { amazonFbaService, coreServices } from "@/lib/site";
import styles from "./HomeServices.module.css";

const summaries = [
  "Package, label, kit and bundle products so they are ready to move.",
  "Receive products and keep inventory organized until an order needs them.",
  "Pick, pack and prepare each order so it can leave the operation.",
  "Move packed orders on to businesses, retailers or customers.",
] as const;

export function HomeServices() {
  return (
    <Section surface="muted" aria-labelledby="home-services-heading">
      <div className={styles.intro}>
        <p className={`type-caption ${styles.eyebrow}`}>Services</p>
        <Heading id="home-services-heading" level={2}>
          What the operation covers.
        </Heading>
       <p className={`type-body-lg measure ${styles.support}`}>
       Amazon FBA is part of the wider co-packing, warehousing, fulfillment and logistics operation.
</p> 
      </div>

      <Link className={styles.featured} href={amazonFbaService.href}>
        <span className={styles.featuredEyebrow}>Featured</span>
        <span className={styles.featuredTitle}>{amazonFbaService.label}</span>
        <span className={styles.featuredDescription}>
          {amazonFbaService.summary}
        </span>
      </Link>

      <ol className={styles.list}>
        {coreServices.map((service, index) => (
          <li key={service.href}>
            <Link className={styles.item} href={service.href}>
              <span className={styles.number} aria-hidden="true">
                0{index + 1}
              </span>
              <span className={styles.copy}>
                <span className={styles.title}>{service.label}</span>
                <span className={styles.description}>{summaries[index]}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}
