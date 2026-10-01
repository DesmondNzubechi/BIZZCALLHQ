"use server";

import nodemailer from "nodemailer";
import {
  validateQuote,
  type QuoteRequest,
  type QuoteSubmission,
} from "@/lib/quote";
import { site } from "@/lib/site";

/**
 * Quote emails go to info@bizcallhq.com.
 * The mailbox is on Google, so reliable sending uses that account:
 * SMTP_HOST (default smtp.gmail.com), SMTP_PORT (default 465),
 * SMTP_USER (default info@bizcallhq.com), SMTP_PASS (Google app password).
 * If SMTP_PASS is not set, the action tries FormSubmit as a fallback.
 */

const formSubmitEndpoint = `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`;

function line(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function messageBody(request: QuoteRequest) {
  return [
    `Name: ${request.name}`,
    `Business: ${request.company}`,
    `Email: ${request.email}`,
    `Phone: ${request.phone || "Not provided"}`,
    `Service: ${request.service}`,
    "",
    request.message,
  ].join("\n");
}

async function sendByMailbox(request: QuoteRequest) {
  const pass = process.env.SMTP_PASS;
  if (!pass) return false;

  const user = process.env.SMTP_USER || site.email;
  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `${site.name} website <${user}>`,
    to: site.email,
    replyTo: request.email,
    subject: `Quote request from ${request.company}`,
    text: messageBody(request),
  });

  return true;
}

async function sendByFormService(request: QuoteRequest) {
  const response = await fetch(formSubmitEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
    body: JSON.stringify({
      name: request.name,
      email: request.email,
      business: request.company,
      phone: request.phone || "Not provided",
      service: request.service,
      message: request.message,
      _subject: `Quote request from ${request.company}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) return false;
  const data = (await response.json()) as { success?: boolean | string };
  return data.success === true || data.success === "true";
}

/**
 * Emails a validated quote request to info@bizcallhq.com.
 * A filled honeypot is treated as sent and is not delivered.
 */
export async function submitQuoteRequest(
  input: QuoteRequest & { website?: string },
): Promise<QuoteSubmission> {
  if (input.website?.trim()) {
    return { status: "sent" };
  }

  const request: QuoteRequest = {
    name: line(input.name),
    company: line(input.company),
    email: line(input.email),
    phone: line(input.phone),
    service: line(input.service),
    message: input.message.trim(),
  };

  if (Object.keys(validateQuote(request)).length > 0) {
    return { status: "failed" };
  }

  try {
    if (process.env.SMTP_PASS) {
      await sendByMailbox(request);
      return { status: "sent" };
    }

    const sent = await sendByFormService(request);
    return sent ? { status: "sent" } : { status: "failed" };
  } catch {
    return { status: "failed" };
  }
}
