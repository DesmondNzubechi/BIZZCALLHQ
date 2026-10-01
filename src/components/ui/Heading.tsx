import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const tags = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
} as const;

type Level = keyof typeof tags;

type HeadingProps = Omit<ComponentProps<"h1">, "color"> & {
  level?: Level;
  variant?: "default" | "display";
};

export function Heading({
  level = 2,
  variant = "default",
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = tags[level];
  const display = variant === "display" && level === 1;

  return (
    <Tag className={cn(display && "type-display", className)} {...props}>
      {children}
    </Tag>
  );
}
