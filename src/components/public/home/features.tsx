import { cn } from '@/lib/utils'
import { featuresInfo } from '@/types/home'

export default function Features() {
  return (
    <section
      className="flex w-full scroll-mt-20 items-center justify-center px-6 py-24"
      id="features"
    >
      <div className="grid max-w-372 gap-16 px-6">
        <div className="text-center">
          <span className="font-mono text-violet-400 text-xs uppercase tracking-widest">
            [ ARQUITETURA DO SISTEMA ]
          </span>
          <h2 className="mt-3 font-bold text-3xl text-white sm:text-4xl">
            Projetado para Eficiência Cognitiva
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400">
            Por que os flashcards tradicionais e os exercícios genéricos de
            gramática de 45 minutos não atendem às necessidades de engenheiros e
            pensadores sistêmicos com agendas lotadas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuresInfo.map((info) => (
            <div
              className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-[#111622] p-6 shadow-lg transition-all duration-300 hover:border-zinc-700/80"
              key={info.title}
            >
              <div>
                {/* Badge do Ícone com cores completas */}
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-lg border',
                    info.badgeStyles
                  )}
                >
                  {info.icon}
                </div>

                <h3 className="mt-6 font-semibold text-lg text-white">
                  {info.title}
                </h3>

                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {info.description}
                </p>
              </div>

              {/* Tag / Exemplo no Rodapé do Card */}
              {info.info ? (
                <div className="mt-8 flex items-center justify-between rounded border border-zinc-800 bg-[#090d14] p-3 font-mono text-[11px]">
                  <span className={cn(info.info.textStyles)}>
                    {info.info.text}
                  </span>
                  {info.info.icon}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
