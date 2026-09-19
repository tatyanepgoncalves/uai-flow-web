'use client'

import { CheckCircle2, Eye, EyeOff, Lock, XCircle } from 'lucide-react'
import type { UseFormReturn } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useFormRegister from '@/hooks/auth/cadastrar/use-form-register'
import { cn } from '@/lib/utils'
import type { RegisterFormData } from '@/schemas/auth/register-schema'

interface FieldConfirmPasswordProps {
  form: UseFormReturn<RegisterFormData>
}

export default function FieldConfirmPassword({
  form,
}: FieldConfirmPasswordProps) {
  const {
    matchBarClass,
    isFilled,
    isMatch,
    showConfirmPassword,
    handleToggleConfirmPassword,
  } = useFormRegister(form)

  return (
    <div className="w-full space-y-2 font-mono">
      {/* Label superior com status de match */}
      <div className="flex items-center justify-between text-xs">
        <Label
          className="font-mono text-zinc-400 uppercase tracking-wider"
          htmlFor="confirmPassword"
        >
          Confirmar Senha
        </Label>
        {isFilled ? (
          <span
            className={`text-xs ${
              isMatch ? 'text-emerald-400' : 'text-rose-400'
            }`}
          >
            Corresponde: {isMatch ? 'verificado' : 'não corresponde'}
          </span>
        ) : (
          <span className="text-zinc-600">auth.confirm</span>
        )}
      </div>

      {/* Input de Confirmar Senha */}
      <div className="relative flex w-full items-center">
        <Lock className="pointer-events-none absolute left-3.5 z-10 h-4 w-4 text-zinc-400" />

        <Input
          {...form.register('confirmPassword')}
          className="h-11 border-zinc-700 bg-zinc-800 px-10 text-white placeholder:text-zinc-600 focus-visible:border-violet-500 focus-visible:ring-violet-500/30"
          id="confirmPassword"
          placeholder="••••••••••••"
          type={showConfirmPassword ? 'text' : 'password'}
        />

        <button
          className="absolute right-3.5 text-zinc-400 hover:text-zinc-200 focus:outline-none"
          onClick={handleToggleConfirmPassword}
          type="button"
        >
          {showConfirmPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Barra Única de Indicador de Match */}
      <div className="pt-1">
        <div
          className={cn(
            'h-1.5 w-full rounded-full transition-colors duration-300',
            matchBarClass
          )}
        />
      </div>

      {/* Mensagem e Ícone descritivo */}
      {isFilled ? (
        <div className="flex items-center justify-between pt-0.5 text-xs text-zinc-400">
          <div
            className={cn(
              'flex items-center gap-1.5',
              isMatch ? 'text-emerald-400' : 'text-rose-400'
            )}
          >
            {isMatch ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                <span>As senhas coincidem perfeitamente</span>
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4" />
                <span>As senhas não coincidem</span>
              </>
            )}
          </div>
          <span className="text-zinc-500">
            {isMatch ? '1/1 match' : '0/1 match'}
          </span>
        </div>
      ) : null}

      {/* Mensagem de Erro do Schema (Zod) */}
      {form.formState.errors.confirmPassword ? (
        <p className="pt-1 text-red-500 text-xs">
          {form.formState.errors.confirmPassword.message}
        </p>
      ) : null}
    </div>
  )
}
