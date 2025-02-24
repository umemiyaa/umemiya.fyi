export function mdxH2({
  children,
  className = "",
  ...props
} : 
  React.HTMLAttributes<HTMLHeadingElement> &
  {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <h1
      className={`text-xl/10 py-2 font-bold ${className}`}
      {...props}
    >
      {children}
    </h1>
)}