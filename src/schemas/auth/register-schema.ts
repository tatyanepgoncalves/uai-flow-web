import { z } from 'zod'

export const registerSchema = z
  .object({
    cefr: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']),
    confirmPassword: z.string().min(1, 'Confirme sua senha'),
    email: z.string().email('E-mail inválido'),
    language: z.string().min(1),
    name: z.string().min(2, 'Nome muito curto'),
    password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
    profession: z.string().min(2),
    scenarios: z.array(z.string()).min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export type RegisterFormData = z.infer<typeof registerSchema>
