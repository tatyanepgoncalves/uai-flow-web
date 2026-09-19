import { cn } from '@/lib/utils'
import { howItWorks } from '@/types/home'

export default function HowWorks() {
  return (
    <section
      className="flex w-full scroll-mt-20 items-center justify-center px-6 py-20"
      id="how-it-works"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="font-mono text-sky-400 text-xs uppercase tracking-widest">
            [ FLUXO DE TRABALHO DE 5 MINUTOS ]
          </span>
          <h2 className="mt-3 font-bold text-3xl text-white sm:text-4xl">
            A Cadência Diária de 3 Etapas
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Sem enrolação. Carga cognitiva mínima. Ritmo diário sustentável para
            engenheiros.
          </p>
        </div>

        {/* PASSOS */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {howItWorks.map((step) => (
            <div
              className={cn(
                'group relative flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-[#121722]/90 p-6',
                'transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-[#151c2a] hover:shadow-sky-950/10 hover:shadow-xl'
              )}
              key={step.number}
            >
              <div>
                {/* Header do Card */}
                <div className="flex items-center justify-between">
                  <span className="font-bold font-mono text-lg text-sky-400 transition-colors group-hover:text-sky-300">
                    {step.number}
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 font-medium font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                    {step.badge}
                  </span>
                </div>

                {/* Conteúdo */}
                <h3 className="mt-4 font-semibold text-base text-zinc-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bloco do Rodapé */}
              {step.info?.text ? (
                <div
                  className={cn(
                    'mt-6 rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3 font-mono text-[11px] backdrop-blur-sm',
                    step.info?.color
                  )}
                >
                  {/* decode string para evitar mostrar &gt; */}
                  {step.info.text.replace(/&gt;/g, '>')}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
