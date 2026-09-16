import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from '@/components/ui/toast'
import { useAuth } from '@/context/auth-context'
import {
  type RegisterFormData,
  registerSchema,
} from '@/schemas/auth/register-schema'
import { registerUser } from '@/services/auth-service'

export default function useRegister() {
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)
  const router = useRouter()
  const { login } = useAuth()

  const form = useForm<RegisterFormData>({
    defaultValues: {
      cefr: 'B1',
      confirmPassword: '',
      email: '',
      language: 'Inglês britânico',
      name: '',
      password: '',
      profession: 'Desenvolvedor Full-Stack',
      scenarios: [''],
    },
    resolver: zodResolver(registerSchema),
  })

  async function onSubmit(data: RegisterFormData) {
    setIsLoading(true)
    setApiError(null)

    try {
      const response = await registerUser(data)

      const { user, token } = response

      // Atualiza o contexto de autenticação do cliente
      if (token && user) {
        login(user, token)
      }

      toast.add({
        description: 'Você foi cadastrado e pode acessar sua conta agora.',
        title: 'Cadastro realizado com sucesso!',
        type: 'success',
      })

      form.reset()
      router.push('/dashboard')

      // biome-ignore lint/suspicious/noExplicitAny: it's necessary
    } catch (error: any) {
      const message =
        error.data?.message || error.message || 'Tente novamente em instantes.'
      console.error('Erro ao cadastrar usuário:', message)

      toast.add({
        description: message,
        title: 'Erro ao cadastrar usuário',
        type: 'error',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    apiError,
    form,
    handleRegister: form.handleSubmit(onSubmit),
    isLoading,
  }
}
