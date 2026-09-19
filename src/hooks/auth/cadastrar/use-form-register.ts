import { useCallback, useState } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import { calculateStrength } from '@/lib/utils'
import type { RegisterFormData } from '@/schemas/auth/register-schema'

export default function useFormRegister(form: UseFormReturn<RegisterFormData>) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const password = form.watch('password') || ''
  const confirmPassword = form.watch('confirmPassword') || ''

  const handleTogglePassword = useCallback(() => {
    setShowPassword((current) => !current)
  }, [])

  const handleToggleConfirmPassword = useCallback(() => {
    setShowConfirmPassword((prev) => !prev)
  }, [])

  const strength = calculateStrength(password)

  const isFilled = Boolean(confirmPassword)
  const isMatch = isFilled && password === confirmPassword

  let matchBarClass = 'bg-zinc-800'

  if (isFilled) {
    matchBarClass = isMatch ? 'bg-emerald-500' : 'bg-rose-500'
  }

  // biome-ignore assist/source/useSortedKeys: it is not necessary here
  return {
    // PASSWORD
    showPassword,
    setShowPassword,
    password,
    handleTogglePassword,
    strength,

    // CONFIRM PASSWORD
    handleToggleConfirmPassword,
    isFilled,
    isMatch,
    matchBarClass,
    setShowConfirmPassword,
    showConfirmPassword,
  }
}
