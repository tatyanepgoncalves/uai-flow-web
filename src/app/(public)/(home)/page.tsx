import CallToAction from '@/components/public/home/call-to-action'
import Features from '@/components/public/home/features'
import Hero from '@/components/public/home/hero'
import HowWorks from '@/components/public/home/how-works'
import MetricsStats from '@/components/public/home/metrics-stats'
import Science from '@/components/public/home/science'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* HERO SECTION */}
      <Hero />

      {/* METRICS / STATS */}
      <MetricsStats />

      {/* FEATURES SECTION */}
      <Features />

      {/* COMPARISON / SCIENCE SECTION */}
      <Science />
      
      {/* WORKFLOW / 3-STEP CADENCE */}
      <HowWorks />


      {/* BOTTOM CTA */}
      <CallToAction />
    </main>
  )
}
