'use client'

import { Sparkles } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { RegisterFormData } from '@/schemas/auth/register-schema'

import FieldAcquisitionLanguage from './field-acquisiton-language'
import FieldDisciplineProfession from './field-discipline-profission'
import FieldFluencyBenchmark from './field-fluency-benchmark'
import FieldFocusScenarios from './field-focus-scenarios'
import HeaderPersonalization from './header-personalization'

interface FormPersonalizationProps {
  isLoading?: boolean
}

export default function FormPersonalization({
  isLoading = false,
}: FormPersonalizationProps) {
  const { watch, setValue } = useFormContext<RegisterFormData>()

  const cefr = watch('cefr')
  const profession = watch('profession')
  const scenarios = watch('scenarios') || []

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6 rounded-2xl border border-zinc-700 bg-zinc-900 p-6 text-zinc-100 shadow-2xl backdrop-blur-xl">
      <HeaderPersonalization />

      <Tabs className="w-full space-y-6" defaultValue="step-1">
        <TabsList className="grid w-full grid-cols-2 bg-zinc-800/50">
          <TabsTrigger value="step-1">Proficiência</TabsTrigger>
          <TabsTrigger value="step-2">Contexto Profissional</TabsTrigger>
        </TabsList>

        <TabsContent className="space-y-6" value="step-1">
          <FieldAcquisitionLanguage />
          <FieldFluencyBenchmark
            cefr={cefr}
            setCefr={(val) => setValue('cefr', val, { shouldValidate: true })}
          />
        </TabsContent>

        <TabsContent className="space-y-6" value="step-2">
          <FieldDisciplineProfession
            onChange={(e) => setValue('profession', e.target.value)}
            quickTagHandlers={(tag) => setValue('profession', tag)}
            value={profession}
          />
          <FieldFocusScenarios
            scenarioHandlers={(id) => {
              const current = scenarios.includes(id)
                ? scenarios.filter((item) => item !== id)
                : [...scenarios, id]
              setValue('scenarios', current)
            }}
            scenarios={scenarios}
          />

          <Button
            className="h-12 w-full rounded-xl bg-violet-600 font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all hover:bg-violet-500 disabled:opacity-50"
            disabled={isLoading}
            type="submit"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            {isLoading ? 'Cadastrando...' : 'Concluir cadastro e abrir o painel'}
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}