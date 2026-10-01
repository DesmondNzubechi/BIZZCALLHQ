import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import styles from "./Section.module.css";

type SectionProps = ComponentProps<"section"> & {
  surface?: "default" | "muted" | "inverse";
  spacing?: "default" | "compact" | "none";
  contained?: boolean;
  width?: "default" | "narrow";
};

export function Section({
  surface = "default",
  spacing = "default",
  contained = true,
  width = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(styles.section, styles[spacing], className)}
      data-surface={surface}
      {...props}
    >
      {contained ? <Container width={width}>{children}</Container> : children}
    </section>
  );
}
