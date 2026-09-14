'use client'

import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useFormPersonalization from '@/hooks/cadastrar/use-form-personalization'

import FieldAcquisitionLanguage from './field-acquisiton-language'
import FieldDisciplineProfession from './field-discipline-profission'
import FieldFluencyBenchmark from './field-fluency-benchmark'
import FieldFocusScenarios from './field-focus-scenarios'
import HeaderPersonalization from './header-personalization'

export default function FormPersonalization() {
  const {
    cefr,
    handleFormSubmit,
    handleProfessionChange,

    profession,
    scenarios,
    setCefr,
    quickTagHandlers,
    scenarioHandlers,
  } = useFormPersonalization()

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6 rounded-2xl border border-zinc-700 bg-zinc-900 p-6 text-zinc-100 shadow-2xl backdrop-blur-xl">
      <HeaderPersonalization />

      <form onSubmit={handleFormSubmit}>
        <Tabs className="w-full space-y-6" defaultValue="step-1">
          <TabsList className="grid w-full grid-cols-2 bg-zinc-800/50">
            <TabsTrigger value="step-1">1. Proficiência</TabsTrigger>
            <TabsTrigger value="step-2">2. Contexto Profissional</TabsTrigger>
          </TabsList>

          <TabsContent className="space-y-6" value="step-1">
            <FieldAcquisitionLanguage />
            <FieldFluencyBenchmark cefr={cefr} setCefr={setCefr} />
          </TabsContent>

          <TabsContent className="space-y-6" value="step-2">
            <FieldDisciplineProfession
              onChange={handleProfessionChange}
              quickTagHandlers={quickTagHandlers}
              value={profession}
            />
            <FieldFocusScenarios
              scenarioHandlers={scenarioHandlers}
              scenarios={scenarios}
            />

            <Button
              className="h-12 w-full rounded-xl bg-violet-600 font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all hover:bg-violet-500"
              type="submit"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Concluir cadastro e abrir o painel
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  )
}
