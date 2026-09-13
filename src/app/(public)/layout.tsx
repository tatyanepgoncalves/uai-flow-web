interface LayoutPublicProps {
  children: React.ReactNode
}

export default function LayoutPublic({ children }: LayoutPublicProps) {
  return (
    <div>
      LayoutPublic
      <div>{children}</div>
    </div>
  )
}
