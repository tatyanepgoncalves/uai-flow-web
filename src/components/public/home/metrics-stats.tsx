import { cn } from '@/lib/utils'
import { metrics, socialProofLogos } from '@/types/home'

export default function MetricsStats() {
  return (
    <section className="border-zinc-800/60 border-y bg-[#0d121c]/50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {metrics.map((mec) => (
            <div
              className="rounded-xl border border-zinc-800/80 bg-[#121824] p-5"
              key={mec.description}
            >
              <span className="font-bold text-3xl text-white">
                {mec.number}
              </span>
              <p className="mt-1 text-xs text-zinc-400">{mec.description}</p>
              <span className={cn(mec.color, 'mt-3 inline-block text-[11px]')}>
                {mec.info}
              </span>
            </div>
          ))}
        </div>

        {/* Social Proof Logos */}
        <div className="mt-12 flex flex-col items-center gap-6 border-zinc-800/60 border-t pt-8 text-center font-mono text-xs md:flex-row md:justify-between">
          <span className="font-medium text-[11px] text-zinc-500 uppercase tracking-widest">
            Calibrado para equipas técnicas de:
          </span>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
            {socialProofLogos.map((logo) => (
              <span
                className="font-semibold text-zinc-400 transition-colors hover:text-zinc-100"
                key={logo}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
