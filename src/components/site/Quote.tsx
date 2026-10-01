"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button, FormField, Heading, Icon, Section } from "@/components/ui";
import {
  quoteServices,
  validateQuote,
  type QuoteField,
  type QuoteFieldErrors,
  type QuoteRequest,
} from "@/lib/quote";
import { submitQuoteRequest } from "@/lib/send-quote";
import { contactDetails, quoteAction, sectionIds, site } from "@/lib/site";
import styles from "./Quote.module.css";

const topics = [
  "The products you need handled",
  "Packaging or labeling requirements",
  "Storage requirements",
  "Order fulfillment needs",
  "Distribution requirements",
] as const;

const emptyFields: QuoteRequest = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

type FormStatus = "idle" | "failed" | "sent";

const fieldOrder: readonly QuoteField[] = [
  "name",
  "company",
  "email",
  "phone",
  "service",
  "message",
];

export function Quote() {
  const [fields, setFields] = useState<QuoteRequest>(emptyFields);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<QuoteFieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [pending, setPending] = useState(false);

  function update(name: QuoteField, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
    if (status !== "idle" && status !== "sent") setStatus("idle");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateQuote(fields);
    setErrors(nextErrors);
    const firstInvalid = fieldOrder.find((name) => nextErrors[name]);
    if (firstInvalid) {
      setStatus("idle");
      document.getElementById(`quote-${firstInvalid}`)?.focus();
      return;
    }

    setPending(true);
    try {
      const result = await submitQuoteRequest({
        name: fields.name.trim(),
        company: fields.company.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        service: fields.service,
        message: fields.message.trim(),
        website,
      });
      setStatus(result.status);
    } catch {
      setStatus("failed");
    } finally {
      setPending(false);
    }
  }

  function startAnother() {
    setFields(emptyFields);
    setWebsite("");
    setErrors({});
    setStatus("idle");
    document.getElementById("quote-name")?.focus();
  }

  return (
    <Section
      id={sectionIds.quote}
      surface="muted"
      aria-labelledby="quote-heading"
    >
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={`type-caption ${styles.eyebrow}`}>Quote</p>
          <Heading id="quote-heading" level={2}>
            Request a Quote
          </Heading>
          <p className={`type-body-lg ${styles.support}`}>
            Describe the products, the handling, and where they need to go.
          </p>
          {contactDetails.length > 0 ? (
            <dl className={styles.details}>
              {contactDetails.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
          <div className={styles.topics}>
            <p className={styles.topicsTitle}>You can tell us about</p>
            <ul className={styles.topicList}>
              {topics.map((topic) => (
                <li key={topic}>
                  <Icon name="check" size={18} />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.panel}>
          {status === "sent" ? (
            <div className={styles.sent}>
              <Heading level={3}>Request received</Heading>
              <p>
                Thank you. Your request was sent to {site.email}. We&apos;ll review
                the details you provided.
              </p>
              <Button type="button" variant="secondary" onClick={startAnother}>
                Send another request
              </Button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <p className={styles.requiredNote}>Fields marked with * are required.</p>
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="quote-website">Website</label>
                <input
                  id="quote-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </div>
              <FormField id="quote-name" label="Full name" required error={errors.name}>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  maxLength={120}
                  onChange={(event) => update("name", event.target.value)}
                />
              </FormField>
              <FormField
                id="quote-company"
                label="Business name"
                required
                error={errors.company}
              >
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={fields.company}
                  maxLength={160}
                  onChange={(event) => update("company", event.target.value)}
                />
              </FormField>
              <FormField
                id="quote-email"
                label="Email address"
                required
                error={errors.email}
              >
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={fields.email}
                  maxLength={254}
                  onChange={(event) => update("email", event.target.value)}
                />
              </FormField>
              <FormField
                id="quote-phone"
                label="Phone number"
                hint="Optional"
                error={errors.phone}
              >
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={fields.phone}
                  maxLength={40}
                  onChange={(event) => update("phone", event.target.value)}
                />
              </FormField>
              <FormField
                id="quote-service"
                label="Service needed"
                required
                error={errors.service}
              >
                <select
                  name="service"
                  value={fields.service}
                  onChange={(event) => update("service", event.target.value)}
                >
                  <option value="">Select a service</option>
                  {quoteServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </FormField>
              <FormField
                id="quote-message"
                label="What do you need?"
                required
                error={errors.message}
              >
                <textarea
                  name="message"
                  rows={5}
                  autoComplete="off"
                  placeholder="Tell us about your products, volume, packaging, storage, or delivery needs."
                  value={fields.message}
                  maxLength={2000}
                  onChange={(event) => update("message", event.target.value)}
                />
              </FormField>

              {status === "failed" ? (
                <p className={styles.notice} role="alert">
                  We couldn&apos;t send your request right now. Please email{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a>, or try again.
                  Your details are still in the form.
                </p>
              ) : null}
              <p className={styles.privacy}>
                This request is emailed to Bizcallhq.{" "}
                <Link href="/privacy">Privacy policy</Link>
              </p>

              <Button type="submit" fullWidth disabled={pending}>
                {quoteAction.label}
              </Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
