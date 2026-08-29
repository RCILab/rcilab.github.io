"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type NavigationLinkProps = ComponentProps<typeof Link>;

function normalizePath(path: string) {
  return path === "/" ? path : path.replace(/\/$/, "");
}

export function NavigationLink({ href, onClick, ...props }: NavigationLinkProps) {
  const pathname = usePathname();
  const destination = typeof href === "string" ? href.split(/[?#]/, 1)[0] : href.pathname;

  return (
    <Link
      {...props}
      href={href}
      onClick={(event) => {
        onClick?.(event);

        if (
          event.defaultPrevented
          || event.button !== 0
          || event.metaKey
          || event.ctrlKey
          || event.shiftKey
          || event.altKey
          || !destination
          || normalizePath(pathname) !== normalizePath(destination)
        ) return;

        event.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    />
  );
}
