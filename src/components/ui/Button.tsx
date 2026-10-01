import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";

type Common = {
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = Common &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common &
  Omit<ComponentProps<typeof Link>, "className" | "children" | "href"> & {
    href: string;
    disabled?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLink(props: ButtonProps): props is ButtonAsLink {
  return typeof props.href === "string";
}

function omit<T extends object, K extends keyof T>(
  value: T,
  keys: readonly K[],
): Omit<T, K> {
  const copy = { ...value };
  for (const key of keys) {
    delete copy[key];
  }
  return copy;
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const classes = cn(
    styles.button,
    styles[variant],
    props.fullWidth && styles.fullWidth,
    props.className,
  );

  if (isLink(props)) {
    const linkProps = omit(props, [
      "variant",
      "fullWidth",
      "className",
      "children",
      "href",
      "disabled",
    ]);

    if (props.disabled) {
      return (
        <a className={classes} aria-disabled="true" tabIndex={-1}>
          {props.children}
        </a>
      );
    }

    const external =
      props.href.startsWith("http://") || props.href.startsWith("https://");

    return (
      <Link
        className={classes}
        href={props.href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...linkProps}
      >
        {props.children}
      </Link>
    );
  }

  const buttonProps = omit(props, [
    "variant",
    "fullWidth",
    "className",
    "children",
    "href",
  ]);

  return (
    <button className={classes} {...buttonProps} type={props.type ?? "button"}>
      {props.children}
    </button>
  );
}
