interface LayoutPrivateProps {
  children: React.ReactNode
}

export default function LayoutPrivate({ children }: LayoutPrivateProps) {
  return (
    <div>
      LayoutPrivate
      <div>{children}</div>
    </div>
  )
}
