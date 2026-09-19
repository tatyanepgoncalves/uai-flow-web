export default function BadgeSuperior() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 font-mono text-slate-400 text-xs">
      <span className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
      <span>HTTP 404: SYNTAX_BRANCH_NOT_FOUND</span>
      <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400">
        ERR_PTR_NULL
      </span>
    </div>
  )
}
