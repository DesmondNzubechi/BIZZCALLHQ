import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import styles from "./Badge.module.css";

type BadgeProps = ComponentProps<"span">;

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span className={cn(styles.badge, className)} {...props}>
      {children}
    </span>
  );
}
