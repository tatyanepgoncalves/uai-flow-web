import { Code2 } from 'lucide-react'
import type { ChangeEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { quickTags } from '@/types/personalization-form'

interface FieldDisciplineProfessionProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  quickTagHandlers: (tag: string) => void
  value: string
}

export default function FieldDisciplineProfession({
  value,
  onChange,
  quickTagHandlers,
}: FieldDisciplineProfessionProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
        <Label htmlFor="profession">Disciplina / Profissão</Label>
        <span className="text-zinc-600">lexicon.domain</span>
      </div>

      <div className="relative flex items-center">
        <Code2 className="pointer-events-none absolute left-3.5 h-4 w-4 text-zinc-400" />
        <Input
          className="h-11 border-zinc-800 bg-zinc-900/80 pl-10 text-sm text-zinc-200 focus-visible:ring-violet-500"
          id="profession"
          onChange={onChange}
          value={value}
        />
      </div>

      <div className="flex items-center gap-2 pt-1 text-xs">
        <span className="text-zinc-500">Tags rápidas:</span>
        <div className="flex flex-wrap gap-1.5">
          {quickTags.map((tag) => (
            <button
              className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
              key={tag}
              onClick={() => quickTagHandlers(tag)}
              type="button"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
