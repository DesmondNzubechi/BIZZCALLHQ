import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { ImageAsset } from "@/lib/images";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  id: string;
  eyebrow?: string;
  title: string;
  support: string;
  image: ImageAsset;
  /** CSS object-position so the subject stays clear of the text. */
  imagePosition?: string;
  actions?: ReactNode;
};

export function PageHero({
  id,
  eyebrow,
  title,
  support,
  image,
  imagePosition = "center",
  actions,
}: PageHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby={id}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className={styles.photo}
        style={{ objectPosition: imagePosition }}
      />
      <div className={styles.overlay} aria-hidden="true" />
      <Container className={styles.content}>
        <div className={styles.copy}>
          {eyebrow ? <p className={`type-caption ${styles.eyebrow}`}>{eyebrow}</p> : null}
          <Heading id={id} level={1} className={styles.headline}>
            {title}
          </Heading>
          <p className={`type-body-lg ${styles.support}`}>{support}</p>
          {actions ? <div className={styles.actions}>{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}
