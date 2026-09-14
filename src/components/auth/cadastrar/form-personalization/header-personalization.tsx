import { Sparkles } from 'lucide-react'

export default function HeaderPersonalization() {
  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-900/40 text-violet-400">
        <Sparkles className="h-5 w-5" />
      </div>
      <h1 className="font-bold text-2xl text-white tracking-tight">
        Calibre seu mecanismo de aprendizado de IA
      </h1>
      <p className="text-xs text-zinc-400">
        Adapte a síntese de blocos de conteúdo à sua profissão, ao seu nível de
        proficiência (CEFR) e à sua rotina de trabalho.
      </p>

      {/* Step Badge */}
      <div className="mt-1 flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 font-mono text-xs text-zinc-400">
        <span className="text-violet-400">⚡ Step 2 of 2</span>
        <span className="text-zinc-600">•</span>
        <span>60-second neural calibration</span>
      </div>
    </div>
  )
}
