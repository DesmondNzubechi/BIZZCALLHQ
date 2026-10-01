import Link from "next/link";
import { Heading, Icon, Section } from "@/components/ui";
import styles from "./HomeWhy.module.css";

const principles = [
  {
    title: "Built around your operation",
    description:
      "The work follows the products, the orders, and the way they need to be stored and sent.",
  },
  {
    title: "One flow from product to delivery",
    description:
      "Co-packing, warehousing, fulfillment and logistics stay in the same operation.",
  },
  {
    title: "Clear processes, consistent execution",
    description:
      "Each stage stays organized, with direct communication through the work.",
  },
] as const;

export function HomeWhy() {
  return (
    <Section aria-labelledby="home-why-heading">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={`type-caption ${styles.eyebrow}`}>Why Bizcallhq</p>
          <Heading id="home-why-heading" level={2}>
            An operation shaped around the work.
          </Heading>
          <p className={styles.support}>
            The approach is straightforward: handle the product flow in one
            place, and keep each stage clear.
          </p>
          <Link className={styles.more} href="/about">
            About Us
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>
        <ol className={styles.list}>
          {principles.map((principle, index) => (
            <li key={principle.title}>
              <p className={styles.number} aria-hidden="true">
                0{index + 1}
              </p>
              <Heading level={3}>{principle.title}</Heading>
              <p className={styles.description}>{principle.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
