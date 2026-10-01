import Link from "next/link";
import { Heading, Icon, Section, SiteImage } from "@/components/ui";
import { images, type ImageAsset } from "@/lib/images";
import { quoteAction } from "@/lib/site";
import styles from "./Services.module.css";

type Offering = {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: readonly string[];
  image: ImageAsset;
};

const offerings: readonly Offering[] = [
  {
    id: "co-packing",
    number: "01",
    title: "Co-Packing",
    description:
      "Products are packaged, labeled, kitted or bundled to the requirements of the business, so they are ready for customers, retailers or distribution.",
    capabilities: ["Packaging", "Labeling", "Kitting", "Bundling"],
    image: images.services.copacking,
  },
  {
    id: "warehousing",
    number: "02",
    title: "Warehousing",
    description:
      "Products are received, checked in and kept organized, so stock is ready when an order or a distribution run needs it.",
    capabilities: ["Receiving", "Storage", "Inventory organization"],
    image: images.services.warehousing,
  },
  {
    id: "fulfillment",
    number: "03",
    title: "Fulfillment",
    description:
      "Items are picked from stored inventory, packed for the order and prepared so they can leave the operation.",
    capabilities: ["Picking", "Packing", "Order preparation"],
    image: images.services.fulfillment,
  },
  {
    id: "logistics",
    number: "04",
    title: "Logistics",
    description:
      "Packed orders are dispatched from the operation and moved toward businesses, retailers or customers.",
    capabilities: ["Dispatch", "Distribution", "Shipment coordination"],
    image: images.services.logistics,
  },
];

export function Services() {
  return (
    <Section surface="muted" aria-labelledby="service-list-heading">
      <div className={styles.intro}>
        <p className={`type-caption ${styles.eyebrow}`}>The services</p>
        <Heading id="service-list-heading" level={2}>
          Four stages, handled together.
        </Heading>
        <p className={`type-body-lg measure ${styles.support}`}>
          Packaging, storage, fulfillment and distribution stay in one
          operation.
        </p>
      </div>

      <div className={styles.list}>
        {offerings.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className={styles.service}
            data-flip={index % 2 === 1 ? "true" : undefined}
          >
            <SiteImage
              image={service.image}
              ratio="3 / 2"
              sizes="(min-width: 64rem) 40rem, 100vw"
              className={styles.media}
            />
            <div className={styles.copy}>
              <p className={styles.number}>{service.number}</p>
              <Heading level={3}>{service.title}</Heading>
              <p className={styles.description}>{service.description}</p>
              <ul className={styles.capabilities}>
                {service.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className={styles.more} href={quoteAction.href}>
                {quoteAction.label}
                <Icon name="arrowRight" size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
