'use client'

import { useState } from 'react'
import FormCadastrar from '@/components/auth/cadastrar/form-cadastrar'
import FormPersonalization from '@/components/auth/cadastrar/form-personalization'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Cadastrar() {
  const [currentStep, setCurrentStep] = useState<'step-1' | 'step-2'>('step-1')

  // Calcula a porcentagem do Progress do Shadcn
  const progressValue = currentStep === 'step-1' ? 50 : 100

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <Tabs
        className="w-full max-w-2xl space-y-6"
        onValueChange={(val) => setCurrentStep(val as 'step-1' | 'step-2')}
        value={currentStep}
      >
        {/* Cabeçalho Customizado mantendo os estilos das etapas */}
        <div className="space-y-8">
          <TabsList className="grid h-auto w-full grid-cols-2 bg-transparent p-0">
            {/* Step 1 Trigger: Formulário Cadastro */}
            <TabsTrigger
              className="flex items-center justify-start gap-3 bg-transparent data-[state=active]:bg-transparent"
              value="step-1"
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full font-semibold text-xs transition-all ${
                  currentStep === 'step-1' || currentStep === 'step-2'
                    ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]'
                    : 'bg-zinc-800 text-zinc-500'
                }`}
              >
                01
              </div>
              <div className="flex flex-col text-left">
                <span
                  className={`font-semibold text-sm leading-none ${
                    currentStep === 'step-1' ? 'text-zinc-900' : 'text-zinc-400'
                  }`}
                >
                  Configuração da conta
                </span>
                <span className="mt-1 font-mono text-xs text-zinc-500">
                  identity.auth
                </span>
              </div>
            </TabsTrigger>

            {/* Step 2 Trigger: Personalização */}
            <TabsTrigger
              className="flex items-center justify-end gap-3 bg-transparent p-0 data-[state=active]:bg-transparent"
              value="step-2"
            >
              <div className="flex flex-col text-right">
                <span
                  className={`font-semibold text-sm leading-none ${
                    currentStep === 'step-2' ? 'text-zinc-900' : 'text-zinc-400'
                  }`}
                >
                  Personalização
                </span>
                <span className="mt-1 font-mono text-xs text-zinc-500">
                  cefr.engine
                </span>
              </div>
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full font-semibold text-xs transition-all ${
                  currentStep === 'step-2'
                    ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]'
                    : 'bg-zinc-800 text-zinc-500'
                }`}
              >
                02
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Componente Progress do Shadcn */}
          <Progress
            className="h-1.5 w-full bg-zinc-800/80 transition-all duration-500 [&>div]:bg-linear-to-r [&>div]:from-violet-500 [&>div]:via-purple-400 [&>div]:to-sky-300"
            value={progressValue}
          />
        </div>

        {/* Conteúdo da Etapa 1 */}
        <TabsContent className="outline-none" value="step-1">
          <FormCadastrar />
        </TabsContent>

        {/* Conteúdo da Etapa 2 */}
        <TabsContent className="outline-none" value="step-2">
          <FormPersonalization />
        </TabsContent>
      </Tabs>
    </div>
  )
}
