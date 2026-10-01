import type { Metadata } from "next";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not available.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Section width="narrow">
      <div className="stack" data-gap="lg">
        <Heading level={1}>Page not found</Heading>
        <p className="measure">That page is not available.</p>
        <div>
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </div>
    </Section>
  );
}
