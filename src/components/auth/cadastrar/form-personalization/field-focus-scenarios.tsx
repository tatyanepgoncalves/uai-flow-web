import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { SCENARIOS_OPTIONS } from '@/types/personalization-form'

interface FieldFocusScenariosProps {
  scenarioHandlers: Record<string, () => void>
  scenarios: string[]
}

export default function FieldFocusScenarios({
  scenarios,
  scenarioHandlers,
}: FieldFocusScenariosProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
        <span>Cenários de Foco Principal</span>
        <span className="text-zinc-600">workflow.scenarios</span>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        {SCENARIOS_OPTIONS.map((scenario) => {
          const isChecked = scenarios.includes(scenario.id)
          return (
            <div
              className={`flex cursor-pointer items-center gap-2.5 rounded-xl border p-3 text-xs transition-all ${
                isChecked
                  ? 'border-violet-500/50 bg-violet-950/20 text-zinc-100'
                  : 'border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700'
              }`}
              key={scenario.id}
            >
              <Checkbox
                checked={isChecked}
                className="border-zinc-700 data-[state=checked]:border-violet-600 data-[state=checked]:bg-violet-600"
                id={scenario.id}
                onCheckedChange={scenarioHandlers[scenario.id]}
              />
              <Label
                className="cursor-pointer font-medium text-xs leading-tight"
                htmlFor={scenario.id}
              >
                {scenario.label}
              </Label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
