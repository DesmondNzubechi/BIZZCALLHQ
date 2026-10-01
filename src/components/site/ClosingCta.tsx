import { Button, Heading, Section } from "@/components/ui";
import { quoteAction } from "@/lib/site";
import styles from "./ClosingCta.module.css";

export function ClosingCta() {
  return (
    <Section surface="muted" aria-labelledby="closing-cta-heading">
      <div className={styles.panel}>
        <Heading id="closing-cta-heading" level={2}>
          Tell us about the operation.
        </Heading>
        <p className={styles.support}>
          Share what you need packed, stored, fulfilled or moved.
        </p>
        <Button href={quoteAction.href}>{quoteAction.label}</Button>
      </div>
    </Section>
  );
}
