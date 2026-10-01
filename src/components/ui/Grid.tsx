import type { CSSProperties, ComponentProps } from "react";
import { cn } from "@/lib/cn";
import styles from "./Grid.module.css";

type Columns = 1 | 2 | 3 | 4;
type Gap = "sm" | "md" | "lg";

const gaps: Record<Gap, string> = {
  sm: "var(--gap-sm)",
  md: "var(--gap-md)",
  lg: "var(--gap-lg)",
};

type GridProps = ComponentProps<"div"> & {
  columns?: Columns;
  tablet?: Columns;
  desktop?: Columns;
  gap?: Gap;
};

export function Grid({
  columns = 1,
  tablet,
  desktop,
  gap = "md",
  className,
  style,
  children,
  ...props
}: GridProps) {
  const columnStyle = {
    "--grid-columns": String(columns),
    "--grid-columns-tablet": String(tablet ?? columns),
    "--grid-columns-desktop": String(desktop ?? tablet ?? columns),
    "--grid-gap": gaps[gap],
  } as CSSProperties;

  return (
    <div
      className={cn(styles.grid, className)}
      style={{ ...columnStyle, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
