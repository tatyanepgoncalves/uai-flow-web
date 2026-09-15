import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { RegisterFormData } from '@/schemas/auth/register-schema'
import { cefrOptions } from '@/types/personalization-form'

interface FieldFluencyBenchmarkProps {
  cefr: RegisterFormData['cefr']
  setCefr: (value: RegisterFormData['cefr']) => void
}

export default function FieldFluencyBenchmark({
  cefr,
  setCefr,
}: FieldFluencyBenchmarkProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
        <span>Referência atual de proficiência do CEFR</span>
        <span className="text-zinc-600">syntax.calibrate()</span>
      </div>

      <RadioGroup
        className="grid grid-cols-1 gap-2.5 sm:grid-cols-2"
        onValueChange={setCefr}
        value={cefr}
      >
        {cefrOptions.map((item) => {
          const isSelected = cefr === item.id
          return (
            <div
              className={cn(
                'relative flex cursor-pointer flex-col justify-between rounded-xl border p-3.5 transition-all',
                isSelected
                  ? 'border-violet-500 bg-violet-950/20 ring-1 ring-violet-500'
                  : 'border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700'
              )}
              key={item.id}
            >
              <div className="flex items-center justify-between">
                <Label
                  className="flex cursor-pointer items-center gap-1.5"
                  htmlFor={item.id}
                >
                  <span className="font-bold text-sm text-white">
                    {item.level}
                  </span>
                  <span className="text-xs text-zinc-400">{item.title}</span>
                </Label>

                <RadioGroupItem
                  className="sr-only"
                  id={item.id}
                  value={item.id}
                />

                <div
                  className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                    isSelected
                      ? 'border-violet-400 bg-violet-600'
                      : 'border-zinc-600 bg-transparent'
                  }`}
                >
                  {isSelected ? (
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  ) : null}
                </div>
              </div>

              {item.badge && isSelected ? (
                <span className="mt-1 w-fit rounded bg-violet-500/20 px-1.5 py-0.5 font-mono font-semibold text-[9px] text-violet-300 tracking-wider">
                  {item.badge}
                </span>
              ) : null}

              <p className="mt-2 text-xs text-zinc-400">{item.description}</p>
            </div>
          )
        })}
      </RadioGroup>
    </div>
  )
}
