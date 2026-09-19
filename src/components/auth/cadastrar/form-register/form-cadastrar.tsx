'use client'

import { ArrowRight, AtSign, IdCard } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useFormContext } from 'react-hook-form'
import FieldConfirmPassword from '@/components/auth/cadastrar/form-register/field-confirm-password'
import { PasswordInput } from '@/components/auth/cadastrar/form-register/password-input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Emblem from '@/images/emblem.png'
import type { RegisterFormData } from '@/schemas/auth/register-schema'

interface FormCadastrarProps {
  onNextTab?: () => void
}

export default function FormCadastrar({ onNextTab }: FormCadastrarProps) {
  // Conecta ao FormProvider central do page.tsx
  const form = useFormContext<RegisterFormData>()

  const handleNextStep = async () => {
    const isValid = await form.trigger([
      'name',
      'email',
      'password',
      'confirmPassword',
    ])

    if (isValid && onNextTab) {
      onNextTab()
    }
  }

  return (
    <>
      <Card className="border border-zinc-800 bg-zinc-900">
        <CardHeader className="flex flex-col items-center justify-center gap-4 text-center">
          <Image
            alt="Emblem"
            className="h-20 w-20"
            height={100}
            src={Emblem}
            width={100}
          />

          <div className="flex flex-col items-center justify-center gap-2">
            <CardTitle className="text-2xl">
              Crie sua conta no UAIFlow
            </CardTitle>
            <CardDescription>
              Aquisição de linguagem sintática voltada para engenheiros de
              software e pensadores sistêmicos.
            </CardDescription>

            <div className="flex w-fit items-center justify-center rounded-[12px] bg-[#252A34] px-4 py-1">
              <p className="text-xs text-zinc-300">
                Pílulas diárias de inglês (níveis CEFR A1/A2/B1/B2) para acesso
                imediato
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                className="font-mono text-zinc-400 uppercase"
                htmlFor="name"
              >
                Nome completo
              </Label>
              <div className="flex w-full items-center rounded-md border border-zinc-700 bg-zinc-800 px-3 text-zinc-400 focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500">
                <IdCard className="h-5 w-5 shrink-0" />
                <Input
                  {...form.register('name')}
                  className="h-11 w-full border-none text-white shadow-none placeholder:text-zinc-500 focus-visible:ring-0"
                  id="name"
                  placeholder="Alex Chen"
                  type="text"
                />
              </div>

              {form.formState.errors.name ? (
                <p className="pt-1 text-red-500 text-xs">
                  {form.formState.errors.name.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label
                className="font-mono text-zinc-400 uppercase"
                htmlFor="email"
              >
                Email
              </Label>
              <div className="flex w-full items-center rounded-md border border-zinc-700 bg-zinc-800 px-3 text-zinc-400 focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500">
                <AtSign className="h-5 w-5 shrink-0" />
                <Input
                  {...form.register('email')}
                  className="h-11 w-full border-none bg-transparent text-white shadow-none placeholder:text-zinc-500 focus-visible:ring-0"
                  id="email"
                  placeholder="alex.chen@company.io"
                  type="email"
                />
              </div>

              {form.formState.errors.email ? (
                <p className="pt-1 text-red-500 text-xs">
                  {form.formState.errors.email.message}
                </p>
              ) : null}
            </div>

            <PasswordInput form={form} />
            <FieldConfirmPassword form={form} />

            <Button
              className="flex w-full items-center justify-center gap-2 bg-violet-600 font-medium text-white hover:bg-violet-700"
              onClick={handleNextStep}
              type="button"
            >
              <span>Continuar para personalização da IA</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <p className="text-center text-xs text-zinc-500">
        Já tem uma conta?{' '}
        <Link
          className="font-medium text-zinc-400 hover:underline"
          href="/entrar"
        >
          Faça login
        </Link>
      </p>
    </>
  )
}
