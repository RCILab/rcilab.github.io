"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NavigationLink } from "./NavigationLink";

type NavItem = { href: string; label: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Close the menu whenever the route changes (header persists across client navigation).
  useEffect(() => {
    if (detailsRef.current) detailsRef.current.open = false;
  }, [pathname]);

  const close = () => {
    if (detailsRef.current) detailsRef.current.open = false;
  };

  return (
    <details className="mobile-nav" ref={detailsRef}>
      <summary aria-label="Open navigation">Menu</summary>
      <nav aria-label="Mobile navigation">
        {items.map((item) => (
          <NavigationLink href={item.href} key={item.href} onClick={close}>
            {item.label}
          </NavigationLink>
        ))}
        <NavigationLink href="/contact" onClick={close}>
          Join us
        </NavigationLink>
      </nav>
    </details>
  );
}
