import { ArrowRight, CheckCircle2, Terminal, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative scroll-mt-20 px-4 pt-12 pb-16 sm:px-6 sm:pt-20"
      id="hero"
    >
      {/* Luz de fundo (Glow Effect) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      >
        <div className="aspect-1108/632 w-277 flex-none bg-linear-to-tr from-violet-600/20 to-sky-500/20 opacity-40" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        {/* Tag Badge Top */}
        <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1.5 font-mono text-violet-300 text-xs backdrop-blur-sm sm:px-4">
          <Zap className="h-3.5 w-3.5 shrink-0 text-violet-400" />
          <span className="truncate sm:whitespace-normal">
            Impulsionado pela neurociência e recuperação ativa via IA
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 font-bold text-3xl text-white tracking-tight sm:text-5xl lg:text-6xl lg:leading-tight">
          Pare de memorizar listas. <br className="hidden sm:inline" /> Comece a
          produzir um{' '}
          <span className="bg-linear-to-r from-violet-300 via-violet-400 to-sky-400 bg-clip-text text-transparent">
            inglês natural.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-2xl text-sm text-zinc-400 leading-relaxed sm:text-base md:text-lg">
          Domine blocos lexicais de alta frequência em 5 minutos por dia com
          feedback instantâneo de IA de nível sênior, personalizado para sua
          área de atuação, seus PRs e as reuniões diárias da sua equipe.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-sm text-white shadow-violet-600/30 shadow-xl transition-all duration-200 hover:bg-violet-500 hover:shadow-2xl hover:shadow-violet-500/40 active:scale-[0.98] sm:w-auto"
            href="/cadastrar"
          >
            <span>Iniciar desafio diário</span>
            <ArrowRight className="h-4 w-4 duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Interactive Terminal Mockup */}
        <div className="mt-12 overflow-hidden rounded-xl border border-zinc-800/80 bg-[#0d121d] text-left shadow-2xl shadow-violet-950/20">
          {/* Header do Terminal */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-zinc-800/80 border-b bg-[#121824] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="ml-2 font-mono text-[11px] text-zinc-400 sm:text-xs">
                session-id: devops_b2_active_drill.uaix
              </span>
            </div>
            <div className="flex items-center gap-1.5 rounded border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 font-mono text-[10px] text-sky-400 sm:text-[11px]">
              <Terminal className="h-3 w-3" />
              <span>CEFR B2 RUNTIME</span>
            </div>
          </div>

          {/* Corpo do Terminal */}
          <div className="space-y-4 p-4 font-mono text-xs sm:space-y-5 sm:p-6 sm:text-sm">
            {/* Top Stats */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-violet-400" />
                  <span className="text-[11px] text-zinc-400 uppercase sm:text-xs">
                    Target Chunk:
                  </span>
                  <span className="font-bold text-white">spin up</span>
                </div>
                <span className="rounded bg-violet-900/40 px-2 py-0.5 text-[10px] text-violet-300 sm:text-xs">
                  v. phrasal • B1/B2
                </span>
              </div>
              <span className="text-[11px] text-zinc-500 sm:text-xs">
                Freq: 98.4% ocorrência em tech
              </span>
            </div>

            {/* Input / Reconstrução */}
            <div className="rounded-lg border border-zinc-800/80 bg-[#151c2a] p-3.5 sm:p-4">
              <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] text-zinc-500 sm:text-xs">
                <span>RECONSTRUÇÃO SINTÁTICA ATIVA:</span>
                <span className="font-medium text-emerald-400">
                  Verificação: Aprovada
                </span>
              </div>
              <p className="mt-2 text-xs text-zinc-200 leading-relaxed sm:text-sm">
                In tomorrow&apos;s release test, we will{' '}
                <span className="border-violet-500 border-b-2 font-bold text-white">
                  spin up
                </span>{' '}
                three temporary Kubernetes clusters to run our integration
                benchmark suite.
                <span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-violet-400 align-middle" />
              </p>
            </div>

            {/* Feedback Box */}
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/10 p-3.5 sm:p-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 font-semibold text-emerald-400 text-xs">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>96/100 • Sintaticamente correto e preciso</span>
                </div>
                <span className="text-[10px] text-zinc-500 sm:text-[11px]">
                  Inferência: 42 ms
                </span>
              </div>
              <p className="mt-2 font-sans text-xs text-zinc-300 leading-relaxed">
                <strong className="text-emerald-300">
                  Refinamento Nativo:
                </strong>{' '}
                &ldquo;Let&apos;s{' '}
                <span className="font-medium text-white">spin up</span> three
                ephemeral Kubernetes clusters...&rdquo; — trocando{' '}
                <span className="text-zinc-500 line-through">temporary</span>{' '}
                por termos padrão de DevOps melhora o registro técnico e a
                concisão.
              </p>
            </div>

            {/* Tags Rodapé */}
            <div className="flex items-center justify-between pt-1 text-xs">
              <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1">
                <span className="whitespace-nowrap rounded bg-zinc-800/80 px-2 py-0.5 text-[10px] text-zinc-400 sm:text-xs">
                  #devops
                </span>
                <span className="whitespace-nowrap rounded bg-zinc-800/80 px-2 py-0.5 text-[10px] text-zinc-400 sm:text-xs">
                  Concisão pragmática
                </span>
                <span className="whitespace-nowrap rounded border border-emerald-800/40 bg-emerald-950/50 px-2 py-0.5 text-[10px] text-emerald-400 sm:text-xs">
                  Ritmo: [spin &apos;UP]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
