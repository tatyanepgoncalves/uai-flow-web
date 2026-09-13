import Header from '@/components/layout/auth/header'

interface LayoutAuthProps {
  children: React.ReactNode
}

export default function LayoutAuth({ children }: LayoutAuthProps) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
