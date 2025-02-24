import Link from "next/link";

export function mdxA(
  { children, className = "", href, ...props }
  : 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & 
  { children: React.ReactNode, className?: string, href: string }
) {
  if (href[0] === "#") {
    return (
      <a
        href={href}
        className={`text-red-600  ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        href={href}
        className={`${className} text-muted-foreground text-sm border-b font-[family-name:var(--font-geist-mono)]`}
        {...props}
      >
        {children}
      </Link>
    );
  }
}