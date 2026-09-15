'use client'

import { Check } from 'lucide-react'
import { useCallback, useState } from 'react'
import FormPersonalization from '@/components/auth/cadastrar/form-personalization/form-personalization'
import FormCadastrar from '@/components/auth/cadastrar/form-register/form-cadastrar'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useRegister from '@/hooks/cadastrar/use-register'
import { cn } from '@/lib/utils'
import { FormProvider } from 'react-hook-form'

export default function Cadastrar() {
  const { form, handleRegister } = useRegister()
  const [currentStep, setCurrentStep] = useState<'step-1' | 'step-2'>('step-1')

  const handleStepChange = useCallback(
    async (value: string) => {
      // Se estiver tentando ir para etapa 2, valida a etapa 1 primeiro
      if (value === 'step-2') {
        const isValid = await form.trigger([
          'name',
          'email',
          'password',
          'confirmPassword',
        ])

        // Se o formulário for inválido, interrompe a execução e não muda a aba
        if (!isValid) {
          return
        }
      }

      setCurrentStep(value as 'step-1' | 'step-2')
    },
    [form]
  )

  const handleNextStep = useCallback(() => {
    setCurrentStep('step-2')
  }, [])

  // Calcula a porcentagem do Progress do Shadcn
  const progressValue = currentStep === 'step-1' ? 50 : 100

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <FormProvider {...form}>

      <form onSubmit={handleRegister} className="w-full max-w-2xl">
        <Tabs
          className="w-full max-w-2xl space-y-6"
          onValueChange={handleStepChange}
          value={currentStep}
        >
          {/* Cabeçalho Customizado mantendo os estilos das etapas */}
          <div className="space-y-8">
            <TabsList className="grid h-auto w-full grid-cols-2 bg-transparent p-0">
              {/* Step 1 Trigger: Formulário Cadastro */}
              <TabsTrigger
                className="flex data-active:bg-transparent  items-center justify-start gap-3"
                value="step-1"
              >
                {currentStep === 'step-1' ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 font-semibold text-white text-xs shadow-tabs-active">
                    01
                  </div>
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tertiary-main shadow-tabs-check">
                    <Check className="flex h-4 w-4 items-center justify-center rounded-full" />
                  </div>
                )}

                <div className="flex flex-col text-left">
                  <span
                    className={cn(
                      'font-semibold text-sm leading-none',
                      currentStep === 'step-1'
                        ? 'text-zinc-200'
                        : 'text-zinc-400'
                    )}
                  >
                    Configuração da conta
                  </span>
                  <span className="mt-1 font-mono text-xs text-zinc-400">
                    identity.auth
                  </span>
                </div>
              </TabsTrigger>

              {/* Step 2 Trigger: Personalização */}
              <TabsTrigger
                className="flex items-center data-active:bg-transparent justify-end gap-3 p-0 data-[state=active]:bg-transparent"
                value="step-2"
              >
                <div className="flex flex-col text-right">
                  <span
                    className={cn(
                      'font-semibold text-sm leading-none',
                      currentStep === 'step-2'
                        ? 'text-zinc-200'
                        : 'text-zinc-400'
                    )}
                  >
                    Personalização
                  </span>
                  <span className="mt-1 font-mono text-xs text-zinc-400">
                    cefr.engine
                  </span>
                </div>
                <div
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full font-semibold text-xs transition-all',
                    currentStep === 'step-2'
                      ? 'bg-violet-600 text-white shadow-tabs-active'
                      : 'bg-zinc-800 text-zinc-500'
                  )}
                >
                  02
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Componente Progress do Shadcn */}
            <Progress value={progressValue} />
          </div>

          {/* Conteúdo da Etapa 1 */}
          <TabsContent className="outline-none" value="step-1">
            <FormCadastrar onNextTab={handleNextStep} />
          </TabsContent>

          {/* Conteúdo da Etapa 2 */}
          <TabsContent className="outline-none" value="step-2">
            <FormPersonalization />
          </TabsContent>
        </Tabs>
      </form>
      </FormProvider>
    </div>
  )
}
