import type { ReactNode, SVGProps } from "react";
import { cn } from "@/lib/cn";
import styles from "./Icon.module.css";

const icons = {
  package: (
    <>
      <path d="M4 8.5 12 4.5l8 4v9L12 21.5l-8-4v-9Z" />
      <path d="M12 12.5v9" />
      <path d="M4.5 8.5 12 12.5l7.5-4" />
    </>
  ),
  warehouse: (
    <>
      <path d="M4 20V10l8-5 8 5v10" />
      <path d="M4 20h16" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  boxes: (
    <>
      <path d="M3.5 9.5h8v8h-8v-8Z" />
      <path d="M12.5 13.5h8v7h-8v-7Z" />
      <path d="M3.5 13.5h8" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="16" r="2" />
      <circle cx="18" cy="8" r="2" />
      <path d="M8 15.2c2.2-.2 3.4-2.2 5-4.2 1.2-1.6 2.6-2.6 3.2-2.8" />
    </>
  ),
  clipboard: (
    <>
      <path d="M8 5h8" />
      <path d="M9 4.5h6v2H9v-2Z" />
      <path d="M7 6.5h10v13H7v-13Z" />
      <path d="M9.5 11h5" />
      <path d="M9.5 14.5h5" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  check: <path d="m5 12.5 4.2 4.2L19 7.5" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m7 7 10 10" />
      <path d="M17 7 7 17" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof icons;

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  label?: string;
  size?: number;
};

export function Icon({
  name,
  label,
  size = 24,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn(styles.icon, className)}
      {...props}
    >
      {icons[name]}
    </svg>
  );
}
