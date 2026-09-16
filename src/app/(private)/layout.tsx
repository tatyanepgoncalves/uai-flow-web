import Header from "@/components/layout/private/header"

interface LayoutPrivateProps {
  children: React.ReactNode
}

export default function LayoutPrivate({ children }: LayoutPrivateProps) {
  return (
    <div>
      <Header />
      LayoutPrivate
      <div>{children}</div>
    </div>
  )
}
