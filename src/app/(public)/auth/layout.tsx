interface LayoutAuthProps {
  children: React.ReactNode
}

export default function LayoutAuth({ children }: LayoutAuthProps) {
  return (
    <div>
      LayoutAuth
      <div>{children}</div>
    </div>
  )
}
