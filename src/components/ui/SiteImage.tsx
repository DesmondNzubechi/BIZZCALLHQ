import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/lib/images";
import styles from "./SiteImage.module.css";

type Ratio = "3 / 2" | "4 / 3" | "16 / 9" | "1 / 1";

type SiteImageProps = {
  image: ImageAsset;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  ratio?: Ratio;
  className?: string;
};

export function SiteImage({
  image,
  alt,
  sizes = "(min-width: 64rem) 50vw, 100vw",
  priority = false,
  ratio,
  className,
}: SiteImageProps) {
  const description = alt ?? image.alt;
  const svg = image.src.endsWith(".svg");

  if (ratio) {
    return (
      <div className={cn(styles.frame, className)} style={{ aspectRatio: ratio }}>
        <Image
          src={image.src}
          alt={description}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized={svg}
          className={styles.cover}
        />
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={description}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={priority}
      unoptimized={svg}
      className={cn(styles.intrinsic, className)}
    />
  );
}
