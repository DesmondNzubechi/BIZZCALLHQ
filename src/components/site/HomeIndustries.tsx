import { Heading, Section } from "@/components/ui";
import styles from "./HomeIndustries.module.css";

const industries = [
  {
    name: "Consumer Goods",
    description:
      "Physical products that need to be packaged, stored and moved.",
  },
  {
    name: "E-commerce",
    description: "Orders that need to be picked, packed, prepared to leave, or readied for Amazon FBA.",
  },
  {
    name: "Retail",
    description: "Stock that needs to stay organized on its way to stores or customers.",
  },
] as const;

export function HomeIndustries() {
  return (
    <Section surface="muted" aria-labelledby="home-industries-heading">
      <div className={styles.intro}>
        <p className={`type-caption ${styles.eyebrow}`}>Industries</p>
        <Heading id="home-industries-heading" level={2}>
          Built around the products you move.
        </Heading>
      </div>
      <ul className={styles.list}>
        {industries.map((industry) => (
          <li key={industry.name} className={styles.item}>
            <Heading level={3}>{industry.name}</Heading>
            <p className={styles.description}>{industry.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
