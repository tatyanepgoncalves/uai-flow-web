import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { scienceLeft, tradicionalApp, uaiflowEngine } from '@/types/home'

export default function Science() {
  return (
    <section
      className="flex w-full scroll-mt-20 items-center justify-center px-6 py-24"
      id="science"
    >
      <div className="flex max-w-372 items-center justify-center px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              TEORIA DA CARGA COGNITIVA
            </span>
            <h2 className="mt-3 font-bold text-3xl text-white sm:text-4xl">
              Aplicativos tradicionais vs o mecanismo de chunking do UAIFlow
            </h2>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              Os métodos de gramática e tradução sobrecarregam a memória de
              trabalho com regras abstratas. O UAIFlow utiliza a Abordagem
              Lexical de Michael Lewis: os seres humanos adquirem idiomas
              combinando blocos de palavras (chunks) pré-fabricados, e não
              montando lemas isolados em fórmulas gramaticais.
            </p>

            <div className="mt-8 space-y-3">
              {scienceLeft.map((item) => (
                <div
                  className="flex items-center gap-3 rounded-lg border border-zinc-800/80 bg-[#121722] p-3 text-xs text-zinc-300"
                  key={item.text}
                >
                  <div
                    className={cn(
                      'flex h-6 w-6 items-center justify-center rounded',
                      `${item.icon.bg}`
                    )}
                  >
                    {item.icon.icon}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Box */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* APP TRADICIONAL */}
            <div className="rounded-xl border border-red-900/30 bg-red-950/10 p-5">
              <div className="flex items-center gap-2 font-semibold text-red-400 text-sm">
                <X className="h-4 w-4" />
                <span>Aplicativos tradicionais</span>
              </div>

              <div className="mt-4 space-y-2.5 text-xs text-zinc-400">
                {tradicionalApp.map((item) => (
                  <div className="flex items-start gap-2" key={item}>
                    <span className="text-red-500">x</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* UAIFlow */}
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/10 p-5">
              <div className="flex items-center gap-2 font-semibold text-emerald-400 text-sm">
                <Check className="h-4 w-4" />
                <span>Mecanismo UAIFlow</span>
              </div>

              <div className="mt-4 space-y-2.5 text-xs text-zinc-300">
                {uaiflowEngine.map((item) => (
                  <div className="flex items-start gap-2" key={item}>
                    <span className="text-emerald-400">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
