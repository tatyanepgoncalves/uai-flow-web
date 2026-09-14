'use client'

import { Eye, EyeOff, Lock, ShieldCheck } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { calculateStrength } from '@/lib/utils'

export function PasswordInput() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
    },
    []
  )

  const handleTogglePassword = useCallback(() => {
    setShowPassword((current) => !current)
  }, [])

  const strength = calculateStrength(password)

  return (
    <div className="w-full space-y-2 font-mono">
      {/* Label superior com status de entropia */}
      <div className="flex items-center justify-between text-xs">
        <Label
          className="font-mono text-zinc-400 uppercase tracking-wider"
          htmlFor="password"
        >
          PASSWORD
        </Label>
        {password ? (
          <span className={`text-xs ${strength.textColor}`}>
            entropy: {strength.label}
          </span>
        ) : null}
      </div>

      {/* Input de Senha com Ícones nas Pontas */}
      <div className="relative flex w-full items-center">
        <Lock className="pointer-events-none absolute left-3.5 z-10 h-4 w-4 text-zinc-400" />

        <Input
          className="border-zinc-700 bg-zinc-800 px-10 text-white placeholder:text-zinc-600 focus-visible:border-violet-500 focus-visible:ring-violet-500/30"
          id="password"
          onChange={handlePasswordChange}
          placeholder="••••••••••••"
          type={showPassword ? 'text' : 'password'}
          value={password}
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
