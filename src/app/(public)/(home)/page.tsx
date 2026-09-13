import Features from '@/components/private/home/features'
import Hero from '@/components/private/home/hero'
import HowWorks from '@/components/private/home/how-works'
import Science from '@/components/private/home/science'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Science />
      <HowWorks />
    </div>
  )
}
