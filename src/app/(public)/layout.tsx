import Header from '@/components/layout/public/header'

interface LayoutPublicProps {
  children: React.ReactNode
}

export default function LayoutPublic({ children }: LayoutPublicProps) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
