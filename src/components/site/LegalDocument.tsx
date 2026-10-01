import type { ReactNode } from "react";
import { Heading, Section } from "@/components/ui";
import styles from "./LegalDocument.module.css";

type LegalDocumentProps = {
  title: string;
  updated: string;
  lead: string;
  children: ReactNode;
};

export function LegalDocument({ title, updated, lead, children }: LegalDocumentProps) {
  return (
    <Section width="narrow" aria-labelledby="legal-heading">
      <article className={styles.document}>
        <p className={styles.updated}>Updated {updated}</p>
        <Heading id="legal-heading" level={1}>
          {title}
        </Heading>
        <p className={styles.lead}>{lead}</p>
        <div className={styles.body}>{children}</div>
      </article>
    </Section>
  );
}
