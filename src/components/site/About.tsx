import { Button, Heading, Icon, Section } from "@/components/ui";
import { quoteAction } from "@/lib/site";
import styles from "./About.module.css";

const flow = ["Receive", "Prepare", "Store", "Fulfill", "Deliver"] as const;

const principles = [
  {
    number: "01",
    title: "Built around your operation",
    description:
      "The work follows the products, the orders, and the way they need to be stored and sent.",
  },
  {
    number: "02",
    title: "One connected operational flow",
    description:
      "Co-packing, warehousing, fulfillment and logistics run as stages of the same operation.",
  },
  {
    number: "03",
    title: "Clear processes and execution",
    description:
      "Each stage stays organized, with direct communication and careful handling through the operation.",
  },
] as const;

export function About() {
  return (
    <>
      <Section aria-labelledby="why-heading">
        <div className={styles.intro}>
          <p className={`type-caption ${styles.eyebrow}`}>Why Bizcallhq</p>
          <Heading id="why-heading" level={2}>
            How the work is approached.
          </Heading>
          <p className={`type-body-lg measure ${styles.support}`}>
            The work is organized around how each business prepares, stores and
            sends its products.
          </p>
        </div>
        <ol className={styles.principles}>
          {principles.map((principle) => (
            <li key={principle.number} className={styles.principle}>
              <span className={styles.number} aria-hidden="true">
                {principle.number}
              </span>
              <Heading level={3} className={styles.title}>
                {principle.title}
              </Heading>
              <p className={styles.description}>{principle.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section surface="muted" aria-labelledby="approach-heading">
        <div className={styles.approach}>
          <Heading id="approach-heading" level={2}>
            How we work
          </Heading>
          <p className={`type-body-lg measure ${styles.support}`}>
            Products move through one sequence. They are received, prepared,
            stored, fulfilled and delivered as part of the same operation.
          </p>
          <p className={styles.flow}>
            <span className="visually-hidden">
              The operation runs from receive, to prepare, to store, to fulfill,
              and then deliver.
            </span>
            <span aria-hidden="true" className={styles.flowSteps}>
              {flow.map((step, index) => (
                <span key={step} className={styles.flowStep}>
                  {index > 0 ? <span className={styles.arrow}>→</span> : null}
                  {step}
                </span>
              ))}
            </span>
          </p>
          <Button href={quoteAction.href} className={styles.action}>
            {quoteAction.label}
            <Icon name="arrowRight" size={18} />
          </Button>
        </div>
      </Section>
    </>
  );
}
