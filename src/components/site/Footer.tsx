import Link from "next/link";
import { Button, Container } from "@/components/ui";
import {
  footerCompany,
  footerServices,
  legalLinks,
  quoteAction,
  site,
} from "@/lib/site";
import { Logo } from "@/components/site/Logo";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo tone="inverse" />
            <p className={styles.description}>
              Co-packing, warehousing, fulfillment and logistics support for
              businesses.
            </p>
          </div>

          <div className={styles.contact}>
            <h2 className={styles.heading}>Contact</h2>
            <p className={styles.prompt}>Need help with your product operation?</p>
            <a className={styles.link} href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <Button href={quoteAction.href} className={styles.action}>
              {quoteAction.label}
            </Button>
          </div>

          <nav className={`${styles.group} ${styles.services}`} aria-label="Services">
            <h2 className={styles.heading}>Services</h2>
            <ul className={styles.list}>
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link className={styles.link} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={`${styles.group} ${styles.company}`} aria-label="Company">
            <h2 className={styles.heading}>Company</h2>
            <ul className={styles.list}>
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link className={styles.link} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.base}>
          {legalLinks.length > 0 ? (
            <nav aria-label="Legal">
              <ul className={styles.legal}>
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link className={styles.link} href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
          <p className={styles.copy}>
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
