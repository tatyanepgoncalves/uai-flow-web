export default function NumberText() {
  return (
    <>
      <div className="relative my-2 select-none">
        <h1 className="bg-linear-to-b from-blue-300 via-slate-400 to-slate-800 bg-clip-text font-extrabold text-8xl text-transparent tracking-widest opacity-90 md:text-9xl">
          404
        </h1>
        <div className="absolute inset-x-0 bottom-4 flex justify-center">
          <span className="rounded border border-slate-800 bg-[#0b0f19]/90 px-3 py-1 font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] backdrop-blur-sm">
            MISSING_CHUNK_INDEX
          </span>
        </div>
      </div>

      <div className="max-w-2xl space-y-3">
        <h2 className="font-bold text-2xl text-white tracking-tight md:text-3xl">
          Chunk ou Rota Não Encontrada
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed md:text-base">
          O caminho léxico que você está procurando foi movido, descontinuado ou
          nunca existiu em nosso corpus de treinamento neural.
        </p>
      </div>
    </>
  )
}
