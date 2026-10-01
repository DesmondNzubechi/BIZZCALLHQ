import { LegalDocument } from "@/components/site/LegalDocument";
import { createPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Privacy Policy | ${site.name}`,
  description:
    "How Bizcallhq handles the details you send when you request a quote on www.bizcallhq.com.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      updated="30 September 2026"
      lead="This policy explains what Bizcallhq collects through www.bizcallhq.com and how that information is used."
    >
      <h2>Who this covers</h2>
      <p>
        Bizcallhq operates this website. Questions about your information can be
        sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>What you send us</h2>
      <p>The quote form asks for:</p>
      <ul>
        <li>Your name</li>
        <li>Your business name</li>
        <li>Your email address</li>
        <li>A phone number, if you choose to add one</li>
        <li>The service you select</li>
        <li>Your message</li>
      </ul>
      <p>
        The site does not ask you to create an account, and it does not collect
        payment details. There is no phone number or social account listed on
        the site.
      </p>

      <h2>Why we use it</h2>
      <p>
        We use these details to read your request, reply to you, and discuss
        the packaging, storage, fulfillment, or logistics work you describe. We
        do not sell this information, and we do not add you to an advertising
        list because you sent the form.
      </p>

      <h2>How the form is delivered</h2>
      <p>
        Submitting the form emails your request to {site.email}. The website
        sends that message to the Bizcallhq inbox. It is not stored in your
        browser. If the site&apos;s own mailbox is not connected, delivery may
        pass through FormSubmit (formsubmit.co), which receives the form
        contents in order to send the email.
      </p>

      <h2>How long we keep it</h2>
      <p>
        The email stays in the Bizcallhq inbox so we can respond and keep a
        record of the enquiry. Email {site.email} if you want the message
        corrected or deleted.
      </p>

      <h2>Cookies</h2>
      <p>
        This website does not use advertising or analytics cookies. It does not
        store your quote in the browser.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, the updated version will be published on this
        page with a new date.
      </p>
    </LegalDocument>
  );
}
