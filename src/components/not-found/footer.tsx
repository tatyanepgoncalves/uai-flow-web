import { Activity, ArrowRight, Grid, Layers } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 hidden w-full max-w-5xl border-slate-900 border-t pt-8">
      <div className="mb-6 flex items-center justify-between font-mono text-slate-400 text-xs uppercase tracking-wider">
        <span>Módulos Recomendados</span>
        <span className="text-slate-400">LATENCY_NORMAL • 18ms</span>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Card 1 */}
        <div className="group flex flex-col justify-between space-y-4 rounded-xl border border-slate-800/80 bg-[#0e1320]/60 p-5 transition-all duration-200 hover:border-slate-700/80">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-300">
                <Layers className="h-4 w-4" />
              </div>
              <span className="rounded border border-slate-800 bg-slate-900 px-2 py-0.5 font-mono text-[11px] text-slate-400">
                A2 → B2
              </span>
            </div>
            <h3 className="font-semibold text-base text-slate-100">
              Daily Chunks
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Continue sua sequência de produção ativa com 5 novos blocos de
              sintaxe contextualizada hoje.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-1 font-medium text-slate-300 text-xs transition-all hover:text-white group-hover:translate-x-0.5"
            href="/daily-chunks"
          >
            <span>Abrir treino</span>
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col justify-between space-y-4 rounded-xl border border-slate-800/80 bg-[#0e1320]/60 p-5 transition-all duration-200 hover:border-slate-700/80">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-300">
                <Grid className="h-4 w-4" />
              </div>
              <span className="rounded border border-emerald-800/40 bg-emerald-950/60 px-2 py-0.5 font-mono text-[11px] text-emerald-400">
                3,420 chunks
              </span>
            </div>
            <h3 className="font-semibold text-base text-slate-100">
              Sentence Library
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Revise suas frases técnicas salvas, collocations corporativas e
              banco de vocabulário ativo.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-1 font-medium text-slate-300 text-xs transition-all hover:text-white group-hover:translate-x-0.5"
            href="/sentence-library"
          >
            <span>Consultar acervo</span>
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col justify-between space-y-4 rounded-xl border border-slate-800/80 bg-[#0e1320]/60 p-5 transition-all duration-200 hover:border-slate-700/80">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-emerald-400">
                <Activity className="h-4 w-4" />
              </div>
              <span className="flex items-center gap-1.5 rounded border border-emerald-800/40 bg-emerald-950/60 px-2 py-0.5 font-mono text-[11px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                99.98%
              </span>
            </div>
            <h3 className="font-semibold text-base text-slate-100">
              Suporte &amp; Status
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Verifique a integridade do cluster neural, APIs do pipeline léxico
              ou relate falhas técnicas.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-1 font-medium text-emerald-400 text-xs transition-all hover:text-emerald-300 group-hover:translate-x-0.5"
            href="/status"
          >
            <span>Checar status</span>
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
