import { Heading, Section, SiteImage } from "@/components/ui";
import { images } from "@/lib/images";
import { sectionIds } from "@/lib/site";
import styles from "./HowItWorks.module.css";

type HowItWorksProps = {
  /** compact: titles only, for the home overview. */
  variant?: "compact" | "full";
};

const steps = [
  {
    number: "01",
    title: "Receive",
    description:
      "Products arrive at the operation, where they are checked in, counted and set out for the next stage.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Products are packaged, labeled, kitted or bundled to the client's requirements before they move on.",
    service: { label: "Co-Packing", href: "/services#co-packing" },
  },
  {
    number: "03",
    title: "Store",
    description:
      "Prepared products stay organized and ready until an order or a distribution run needs them.",
    service: { label: "Warehousing", href: "/services#warehousing" },
  },
  {
    number: "04",
    title: "Fulfill",
    description:
      "When products need to move, orders are picked, packed and prepared so they can leave.",
    service: { label: "Fulfillment", href: "/services#fulfillment" },
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "Packed orders are dispatched from the operation and moved toward businesses, retailers or customers.",
    service: { label: "Logistics", href: "/services#logistics" },
  },
] as const;

export function HowItWorks({ variant = "full" }: HowItWorksProps) {
  const detailed = variant === "full";

  return (
    <Section id={sectionIds.howItWorks} aria-labelledby="how-it-works-heading">
      <div className={styles.intro}>
        <p className={`type-caption ${styles.eyebrow}`}>How it works</p>
        <Heading id="how-it-works-heading" level={2}>
          One operation, from product to delivery.
        </Heading>
        <p className={`type-body-lg measure ${styles.support}`}>
          {detailed
            ? "Once products arrive, Bizcallhq receives, prepares, stores, fulfills and delivers them as one sequence, so each handoff stays inside the same operation."
            : "Receive, prepare, store, fulfill and deliver. Each handoff stays inside the same operation."}
        </p>
      </div>

      {detailed ? (
        <SiteImage
          image={images.howItWorks.operation}
          ratio="16 / 9"
          sizes="(min-width: 64rem) 72rem, 100vw"
          className={styles.photo}
        />
      ) : null}

      <ol className={styles.steps} aria-label="How a product moves through the operation">
        {steps.map((step) => (
          <li key={step.number} className={styles.step}>
            <div className={styles.rail}>
              <span className={styles.number} aria-hidden="true">
                {step.number}
              </span>
            </div>
            <div className={styles.copy}>
              <Heading level={3} className={styles.title}>
                {step.title}
              </Heading>
              {detailed ? <p className={styles.description}>{step.description}</p> : null}
              {detailed && "service" in step ? (
                <a className={styles.service} href={step.service.href}>
                  {step.service.label}
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
