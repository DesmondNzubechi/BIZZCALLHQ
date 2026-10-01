import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import styles from "./Divider.module.css";

type DividerProps = ComponentProps<"hr">;

export function Divider({ className, ...props }: DividerProps) {
  return <hr className={cn(styles.divider, className)} {...props} />;
}
