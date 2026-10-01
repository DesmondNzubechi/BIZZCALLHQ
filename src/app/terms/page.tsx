import { LegalDocument } from "@/components/site/LegalDocument";
import { createPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Terms of Use | ${site.name}`,
  description:
    "The terms for using the Bizcallhq website and for sending a quote request.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Use"
      updated="30 September 2026"
      lead="These terms cover use of www.bizcallhq.com. They are the rules for the website, not the contract for a job."
    >
      <h2>The website</h2>
      <p>
        Bizcallhq operates this site to describe co-packing, warehousing,
        fulfillment, and logistics. The pages are general information. They are
        not a price, a timetable, a coverage promise, or a confirmed quote.
      </p>

      <h2>Quote requests</h2>
      <p>
        Sending the form asks Bizcallhq to review what you describe. That
        request is emailed to <a href={`mailto:${site.email}`}>{site.email}</a>.
        Work begins only if both sides later agree to it. The agreement for
        that work, not these terms, sets the scope.
      </p>

      <h2>What you send</h2>
      <p>
        You agree that the details in the form are accurate and that you may
        share them. Do not include information you are not ready to send by
        email.
      </p>

      <h2>Using the site</h2>
      <p>
        You may read the site and request a quote. Do not misuse the form, try
        to disrupt the site, or present the site&apos;s text, logo, or layout as
        your own.
      </p>

      <h2>Availability</h2>
      <p>
        The site may be updated or briefly unavailable. A page being online does
        not by itself confirm that a service, date, or price is available.
      </p>

      <h2>Responsibility</h2>
      <p>
        Decisions made only from reading the site are your own. Confirmed
        operational work is handled under the agreement made for that work.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalDocument>
  );
}
