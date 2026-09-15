import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Função simples para calcular o nível de entropia/força da senha
export function calculateStrength(password: string) {
  let score = 0
  if (!password) {
    return {
      barsText: '0/4 bars',
      color: 'bg-zinc-700',
      label: 'empty',
      score: 0,
      text: '',
    }
  }

  if (password.length >= 8) {
    score++
  }
  if (password.length >= 12) {
    score++
  }
  if (/[0-9]/.test(password) && /[a-zA-Z]/.test(password)) {
    score++
  }
  if (/[^a-zA-Z0-9]/.test(password)) {
    score++
  }

  switch (score) {
    case 1:
      return {
        barsText: '1/4 bars',
        color: 'bg-red-500',
        label: 'fraca',
        score: 1,
        text: 'Fraca: adicione números e símbolos',
        textColor: 'text-red-400',
      }
    case 2:
      return {
        barsText: '2/4 bars',
        color: 'bg-amber-500',
        label: 'média',
        score: 2,
        text: 'Média: adicione mais caracteres',
        textColor: 'text-amber-400',
      }
    case 3:
      return {
        barsText: '3/4 bars',
        color: 'bg-emerald-500',
        label: 'forte',
        score: 3,
        text: 'Forte: 12+ caracteres, símbolos mistos & números',
        textColor: 'text-emerald-400',
      }
    case 4:
      return {
        barsText: '4/4 bars',
        color: 'bg-emerald-400',
        label: 'muito forte',
        score: 4,
        text: 'Muito Forte: robusto & seguro',
        textColor: 'text-emerald-400',
      }
    default:
      return {
        barsText: '0/4 bars',
        color: 'bg-zinc-700',
        label: 'fraca',
        score: 0,
        text: 'Muito curta',
        textColor: 'text-zinc-500',
      }
  }
}
