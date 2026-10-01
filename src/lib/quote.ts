/**
 * Quote request shape and checks shared by the form and the email action.
 * Delivery lives in src/lib/send-quote.ts so the inbox address stays on the server.
 */

export const quoteServices = [
  "Co-Packing",
  "Warehousing",
  "Fulfillment",
  "Logistics",
  "Multiple Services",
  "Not Sure Yet",
] as const;

export type QuoteService = (typeof quoteServices)[number];

export type QuoteRequest = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export type QuoteField = keyof QuoteRequest;
export type QuoteFieldErrors = Partial<Record<QuoteField, string>>;
export type QuoteSubmission = { status: "sent" } | { status: "failed" };

export function validateQuote(fields: QuoteRequest): QuoteFieldErrors {
  const errors: QuoteFieldErrors = {};
  const name = fields.name.trim();
  const company = fields.company.trim();
  const email = fields.email.trim();
  const phone = fields.phone.trim();
  const message = fields.message.trim();
  const service = fields.service.trim();

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  }
  if (company.length < 2) {
    errors.company = "Please enter your business name.";
  }
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (phone && phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a phone number we can use.";
  }
  if (!quoteServices.includes(service as QuoteService)) {
    errors.service = "Please choose a service.";
  }
  if (!message) {
    errors.message = "Please tell us a little about what you need.";
  } else if (message.length < 12) {
    errors.message = "Please tell us a little more about what you need.";
  }

  return errors;
}
