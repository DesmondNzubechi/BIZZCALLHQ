import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import styles from "./Logo.module.css";

type LogoProps = {
  /** inverse: light wordmark for the dark footer. */
  tone?: "default" | "inverse";
  onClick?: () => void;
};

export function Logo({ tone = "default", onClick }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(styles.logo, tone === "inverse" && styles.inverse)}
      onClick={onClick}
    >
      <Image
        src={images.logo.src}
        alt=""
        width={images.logo.width}
        height={images.logo.height}
        priority
        className={styles.mark}
        style={{ width: "auto", height: "2.25rem" }}
      />
      <span className={styles.wordmark}>{site.name}</span>
      <span className="visually-hidden"> home</span>
    </Link>
  );
}
