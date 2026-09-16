import { CheckCircle2 } from 'lucide-react'

export default function MockConsole() {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-slate-800/80 bg-[#070a11] text-left font-mono text-xs shadow-2xl">
      {/* Header do Terminal */}
      <div className="flex items-center justify-between border-slate-800/80 border-b bg-[#0e1320] px-4 py-2.5 text-slate-400">
        <div className="flex items-center space-x-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-400">
            uaiflow-core::runtime_debugger
          </span>
        </div>
        <div className="text-[11px] text-slate-500">bash [v2.4.8]</div>
      </div>

      {/* Conteúdo do Terminal */}
      <div className="space-y-3 p-4 text-slate-300 leading-relaxed">
        <p className="text-slate-500">
          &gt; initiating neural graph traversal...
        </p>

        <div className="flex items-center justify-between">
          <span className="text-cyan-400">
            $ GET /lexical-corpus/unknown/route
          </span>
          <span className="rounded border border-rose-800/50 bg-rose-950/80 px-2 py-0.5 text-[10px] text-rose-300">
            404 Resource Missing
          </span>
        </div>

        <p className="pl-4 text-slate-300">
          lexical_engine: status.abort(&quot;
          <span className="text-amber-200/90">
            Chunk pointer corrupted or unindexed in CEFR tree
          </span>
          &quot;)
        </p>

        <p className="pl-4 text-slate-400">
          <span className="text-cyan-400">recovery_action:</span> &quot;Fallback
          to /dashboard/daily-chunks or re-verify pointer reference&quot;
        </p>

        <div className="flex items-center gap-2 pt-1 text-emerald-400">
          <CheckCircle2 className="h-3.5 w-3.5" />
          <span>
            Diagnostic complete: 1 broken link recorded. Self-healing daemon
            pinged.
          </span>
        </div>
      </div>
    </div>
  )
}
