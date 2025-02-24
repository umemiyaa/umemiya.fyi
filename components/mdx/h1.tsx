export function mdxH1({
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
      className={`text-4xl font-bold ${className}`}
      {...props}
    >
      {children}
    </h1>
)}