"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { navigation, quoteAction } from "@/lib/site";
import { Logo } from "@/components/site/Logo";
import styles from "./Header.module.css";

const DESKTOP_NAV_QUERY = "(min-width: 64rem)";

function useDesktopNav() {
  const [desktop, setDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_NAV_QUERY);
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return desktop;
}

export function Header() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const desktop = useDesktopNav();
  const open = openPath === pathname && desktop !== true;
  const overHero =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/services" ||
    pathname === "/contact";

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const apply = () => {
      const header = bar.parentElement ?? bar;
      document.documentElement.style.setProperty(
        "--header-offset",
        `${header.offsetHeight}px`,
      );
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(bar);
    if (bar.parentElement) observer.observe(bar.parentElement);
    return () => {
      observer.disconnect();
      document.documentElement.style.setProperty("--header-offset", "0px");
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = window.scrollY > 4;
        setScrolled((current) => (current === next ? current : next));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_NAV_QUERY);
    const onChange = () => {
      if (media.matches) setOpenPath(null);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = () =>
      [
        ...drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((element) => element.tabIndex !== -1);

    const frame = requestAnimationFrame(() => focusable()[0]?.focus());

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        restoreFocus.current = true;
        setOpenPath(null);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const main = document.getElementById("main-content");
    const footer = document.querySelector("footer");
    const bar = barRef.current;
    const lock = open && desktop === false;

    const release = () => {
      document.body.style.overflow = "";
      if (main) main.inert = false;
      if (footer instanceof HTMLElement) footer.inert = false;
      if (bar) bar.inert = false;
    };

    if (!lock) {
      release();
      return;
    }

    document.body.style.overflow = "hidden";
    if (main) main.inert = true;
    if (footer instanceof HTMLElement) footer.inert = true;
    if (bar) bar.inert = true;
    return release;
  }, [open, desktop]);

  useEffect(() => {
    if (open || !restoreFocus.current) return;
    restoreFocus.current = false;
    toggleRef.current?.focus();
  }, [open]);

  function closeMenu(shouldRestore: boolean) {
    restoreFocus.current = shouldRestore;
    setOpenPath(null);
  }

  function onNavigate() {
    const mobile = window.matchMedia(DESKTOP_NAV_QUERY).matches === false;
    setOpenPath(null);
    if (!mobile) return;
    requestAnimationFrame(() => {
      const main = document.getElementById("main-content");
      if (!main) return;
      if (!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
      main.focus();
    });
  }

  return (
    <header
      className={styles.header}
      data-scrolled={scrolled ? "true" : undefined}
      data-open={open ? "true" : undefined}
      data-over-hero={overHero ? "true" : undefined}
    >
      <Container className={styles.bar} ref={barRef}>
        <Logo />
        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.list}>
            {navigation.map((item) => {
              const current = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn("type-nav", styles.link, current && styles.current)}
                    aria-current={current ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.tools}>
          <div className={styles.desktopCta}>
            <Button href={quoteAction.href}>{quoteAction.label}</Button>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="site-navigation"
            onClick={() => (open ? closeMenu(true) : setOpenPath(pathname))}
          >
            <Icon name={open ? "close" : "menu"} />
            <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </Container>

      <button
        type="button"
        className={styles.overlay}
        data-open={open ? "true" : undefined}
        aria-label="Close menu"
        tabIndex={-1}
        inert={!open ? true : undefined}
        onClick={() => closeMenu(true)}
      />

      <div
        ref={drawerRef}
        id="site-navigation"
        className={styles.drawer}
        data-open={open ? "true" : undefined}
        role="dialog"
        aria-modal={open}
        aria-label="Primary"
        aria-hidden={open ? undefined : true}
        inert={!open ? true : undefined}
      >
        <div className={styles.drawerHead}>
          <Logo onClick={onNavigate} />
          <button type="button" className={styles.toggle} onClick={() => closeMenu(true)}>
            <Icon name="close" />
            <span className="visually-hidden">Close menu</span>
          </button>
        </div>
        <nav className={styles.drawerNav} aria-label="Primary">
          <ul className={styles.drawerList}>
            {navigation.map((item) => {
              const current = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn("type-nav", styles.drawerLink, current && styles.current)}
                    aria-current={current ? "page" : undefined}
                    onClick={onNavigate}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.drawerCta}>
            <Button href={quoteAction.href} fullWidth onClick={onNavigate}>
              {quoteAction.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
