'use client'

import { BookOpen, Flag, LayoutGrid } from 'lucide-react'
import Link from 'next/link'
import BadgeSuperior from '@/components/not-found/badge-superior'
import Footer from '@/components/not-found/footer'
import MockConsole from '@/components/not-found/mock-console'
import NumberText from '@/components/not-found/number-text'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-[#0b0f19] p-6 font-sans text-slate-100 selection:bg-purple-500/30 md:p-12">
      {/* Container Central (Conteúdo Principal da 404) */}
      <main className="mt-8 flex w-full max-w-4xl flex-col items-center space-y-8 text-center">
        {/* Badge Superior */}
        <BadgeSuperior />

        {/* 404 Grande com Efeito de Gradiente, Título e Subtítulo */}
        <NumberText />

        {/* Terminal / Mock de Console */}
        <MockConsole />

        {/* Botões de Ação Principais */}
        <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
          {/* Botão Primário (Roxo / Shadcn Button Style) */}
          <Link
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-purple-600 px-6 py-3 font-medium text-sm text-white shadow-lg shadow-purple-900/30 transition-all duration-200 hover:bg-purple-500 sm:w-auto"
            href="/central-chunks"
          >
            <LayoutGrid className="h-4 w-4" />
            <span>Retornar a Central</span>
          </Link>

          {/* Botão Secundário (Escuro / Ghost Style) */}
          <Link
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg border border-slate-800 bg-slate-900 px-6 py-3 font-medium text-slate-200 text-sm transition-all duration-200 hover:bg-slate-800 sm:w-auto"
            href="/biblioteca-de-frases"
          >
            <BookOpen className="h-4 w-4 text-slate-400" />
            <span>Explorar Biblioteca de Frases</span>
          </Link>
        </div>

        {/* Link Secundário (Feedback) inline-flex */}
        <button
          className="hidden items-center gap-2 pt-1 text-slate-400 text-xs transition-colors hover:text-slate-200"
          // biome-ignore lint/performance/noJsxPropsBind: only exemple
          // biome-ignore lint/suspicious/noAlert: only example
          onClick={() => alert('Relatório enviado com sucesso!')}
          type="button"
        >
          <Flag className="h-3.5 w-3.5" />
          <span>Relatar rota ou link quebrado</span>
        </button>
      </main>

      {/* Seção Inferior: Módulos Recomendados */}
      <Footer />
    </div>
  )
}
