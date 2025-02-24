export function Wrapper({children}: {children: React.ReactNode}) {
  return <div className="border-b py-3">
    {children}
  </div>
}