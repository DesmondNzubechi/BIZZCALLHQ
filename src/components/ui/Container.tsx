import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import styles from "./Container.module.css";

type ContainerProps = ComponentProps<"div"> & {
  width?: "default" | "narrow";
};

export function Container({
  width = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(styles.container, width === "narrow" && styles.narrow, className)}
      {...props}
    >
      {children}
    </div>
  );
}
