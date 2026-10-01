import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import styles from "./Card.module.css";

type CardProps = ComponentProps<"div"> & {
  elevated?: boolean;
  as?: "div" | "article";
};

export function Card({
  as = "div",
  elevated = false,
  className,
  children,
  ...props
}: CardProps) {
  const Tag = as;

  return (
    <Tag
      className={cn(styles.card, elevated && styles.elevated, className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
