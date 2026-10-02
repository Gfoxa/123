import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
};

export function ButtonLink({ href, children, variant = "solid", className = "", ...props }: ButtonLinkProps) {
  return (
    <Link href={href} className={`button button--${variant} ${className}`} {...props}>
      {children}
    </Link>
  );
}
