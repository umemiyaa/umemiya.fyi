export function mdxP({
  children,
  className = "",
  ...props
} : 
  React.HTMLAttributes<HTMLParagraphElement> &
  {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <p
      className={`text-muted-foreground text-base/relaxed py-2 ${className}`}
      {...props}
    >
      {children}
    </p>
)}