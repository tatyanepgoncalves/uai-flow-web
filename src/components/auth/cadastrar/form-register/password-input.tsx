'use client'

import { Eye, EyeOff, Lock, ShieldCheck } from 'lucide-react'
import type { UseFormReturn } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useFormRegister from '@/hooks/cadastrar/use-form-register'
import { calculateStrength } from '@/lib/utils'
import type { RegisterFormData } from '@/schemas/auth/register-schema'

interface PasswordInputProps {
  form: UseFormReturn<RegisterFormData>
}

export function PasswordInput({ form }: PasswordInputProps) {
  const { showPassword, password, handleTogglePassword } = useFormRegister(form)

  const strength = calculateStrength(password)

  return (
    <div className="w-full space-y-2 font-mono">
      {/* Label superior com status de entropia */}
      <div className="flex items-center justify-between text-xs">
        <Label
          className="font-mono text-zinc-400 uppercase tracking-wider"
          htmlFor="password"
        >
          Senha
        </Label>
        {password ? (
          <span className={`text-xs ${strength.textColor}`}>
            entropia: {strength.label}
          </span>
        ) : null}
      </div>

      {/* Input de Senha */}
      <div className="relative flex w-full items-center">
        <Lock className="pointer-events-none absolute left-3.5 z-10 h-4 w-4 text-zinc-400" />

        <Input
          {...form.register('password')}
          className="h-11 border-zinc-700 bg-zinc-800 px-10 text-white placeholder:text-zinc-600 focus-visible:border-violet-500 focus-visible:ring-violet-500/30"
          id="password"
          placeholder="••••••••••••"
          type={showPassword ? 'text' : 'password'}
        />

        <button
          className="absolute right-3.5 text-zinc-400 hover:text-zinc-200 focus:outline-none"
          onClick={handleTogglePassword}
          type="button"
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>

      {form.formState.errors.password ? (
        <p className="pt-1 text-red-500 text-xs">
          {form.formState.errors.password.message}
        </p>
      ) : null}

      {/* Barras de progresso da força (4 segmentos) */}
      <div className="grid grid-cols-4 gap-2 pt-1">
        {[1, 2, 3, 4].map((barIndex) => (
          <div
            className={`h-1.5 w-full rounded-full transition-colors duration-300 ${
              barIndex <= strength.score ? strength.color : 'bg-zinc-800'
            }`}
            key={barIndex}
          />
        ))}
      </div>

      {/* Mensagem descritiva e indicador de barras */}
      {password ? (
        <div className="flex items-center justify-between pt-0.5 text-xs text-zinc-400">
          <div className={`flex items-center gap-1.5 ${strength.textColor}`}>
            <ShieldCheck className="h-4 w-4" />
            <span>{strength.text}</span>
          </div>
          <span className="text-zinc-500">{strength.barsText}</span>
        </div>
      ) : null}
    </div>
  )
}
