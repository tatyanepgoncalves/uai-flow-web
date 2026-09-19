import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden border-zinc-800/60 border-t bg-linear-to-b from-[#0b0f17] via-[#0e1422] to-[#111726] px-4 py-16 sm:px-6 sm:py-24">
      {/* Luz de fundo (Glow Effect) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-75 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]"
      />

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge superior */}
        <span className="font-mono font-semibold text-[11px] text-violet-400 uppercase tracking-widest sm:text-xs">
          [ ALCANCE A FLUÊNCIA EM 14 DIAS ]
        </span>

        {/* Headline principal */}
        <h2 className="mt-4 font-bold text-2xl text-white tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight">
          Pronto para elevar o nível da sua fluência internacional em
          tecnologia?
        </h2>

        {/* Subtítulo */}
        <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 leading-relaxed sm:text-base">
          Junte-se a milhares de desenvolvedores que se comunicam com confiança
          em reuniões diárias (<em>stand-ups</em>) multidisciplinares, revisões
          de arquitetura críticas e alinhamentos globais de engenharia.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-sm text-white shadow-violet-600/30 shadow-xl transition-all duration-200 hover:bg-violet-500 hover:shadow-2xl hover:shadow-violet-500/40 active:scale-[0.98] sm:w-auto"
            href="/cadastrar"
          >
            <Zap className="h-4 w-4 shrink-0 fill-white text-white" />
            <span>Comece seu desafio</span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Nota explicativa do rodapé */}
        <p className="mx-auto mt-5 max-w-md text-xs text-zinc-500 leading-normal">
          Não é necessário informar dados de pagamento. Integração imediata em
          60 segundos. Combina perfeitamente com o seu café da manhã.
        </p>
      </div>
    </section>
  )
}
