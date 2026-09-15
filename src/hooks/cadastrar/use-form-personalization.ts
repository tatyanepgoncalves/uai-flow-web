'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Schema de validação
export const personalizationSchema = z.object({
  cefr: z.string().min(1, 'Selecione seu nível de proficiência'),
  language: z.string().min(1, 'Selecione um idioma de destino'),
  profession: z.string().min(2, 'Informe sua profissão ou área'),
  scenarios: z
    .array(z.string())
    .min(1, 'Selecione pelo menos um cenário de foco'),
})

export type PersonalizationFormData = z.infer<typeof personalizationSchema>

export default function useFormPersonalization() {
  const form = useForm<PersonalizationFormData>({
    defaultValues: {
      cefr: 'B1',
      language: 'en-us',
      profession: 'Senior Full-Stack & DevOps Engineer',
      scenarios: ['code-reviews', 'daily-standups', 'design-docs'],
    },
    resolver: zodResolver(personalizationSchema),
  })

  const { watch, setValue, handleSubmit } = form

  // Observa os valores do formulário
  const cefr = watch('cefr')
  const profession = watch('profession')
  const scenarios = watch('scenarios')

  // Setters com useCallback para manter referências estáveis
  const setCefr = useCallback(
    (value: string) => {
      setValue('cefr', value, { shouldValidate: true })
    },
    [setValue]
  )

  const handleProfessionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue('profession', e.target.value, { shouldValidate: true })
    },
    [setValue]
  )

  const handleSelectTag = useCallback(
    (tag: string) => {
      const cleanTag = tag.replace(/^\+\s*/, '')
      setValue('profession', cleanTag, { shouldValidate: true })
    },
    [setValue]
  )

  const handleToggleScenario = useCallback(
    (id: string) => {
      const currentScenarios = form.getValues('scenarios') || []
      const updatedScenarios = currentScenarios.includes(id)
        ? currentScenarios.filter((item) => item !== id)
        : [...currentScenarios, id]

      setValue('scenarios', updatedScenarios, { shouldValidate: true })
    },
    [form, setValue]
  )

  // Submissão final do cadastro
  const onSubmit = useCallback(async (data: PersonalizationFormData) => {
    try {
      // Exemplo de envio para sua API
      console.log('Payload de cadastro enviado:', data)

      // await api.post('/users/personalization', data)
    } catch (error) {
      console.error('Erro ao salvar personalização:', error)
    }
  }, [])

  return {
    cefr,
    form,
    handleFormSubmit: handleSubmit(onSubmit),
    handleProfessionChange,
    handleSelectTag,
    handleToggleScenario,
    profession,
    scenarios,
    setCefr,
    
  }
}
