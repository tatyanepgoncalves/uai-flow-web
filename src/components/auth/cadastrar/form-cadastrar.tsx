import { AtSign, IdCard } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
import { PasswordInput } from './password-input'

export default function FormCadastrar() {
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
              <p className="text-zinc-300">
                Pílulas diárias de inglês (níveis CEFR A1/A2/B1/B2) para acesso
                imediato
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Nome completo */}
          <div className="space-y-2">
            <Label className="font-mono text-zinc-400" htmlFor="name">
              Nome completo
            </Label>
            <div className="flex w-full items-center rounded-md border border-zinc-700 bg-zinc-800 px-3 text-zinc-400 focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500">
              <IdCard className="h-5 w-5 shrink-0" />
              <Input
                className="border-none bg-transparent! text-white shadow-none placeholder:text-zinc-500 focus-visible:ring-0 dark:bg-transparent!"
                id="name"
                placeholder="Alex Chen"
                type="text"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label className="font-mono text-zinc-400" htmlFor="email">
              Email
            </Label>
            <div className="flex w-full items-center rounded-md border border-zinc-700 bg-zinc-800 px-3 text-zinc-400 focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500">
              <AtSign className="h-5 w-5 shrink-0" />
              <Input
                className="border-none bg-transparent! text-white shadow-none placeholder:text-zinc-500 focus-visible:ring-0 dark:bg-transparent!"
                id="email"
                placeholder="alex.chen@company.io"
                type="email"
              />
            </div>
          </div>

          {/* Senha */}
          <PasswordInput />

          <Button className="bg-primary-mid">
            Continue a pernalização da IA
          </Button>
        </CardContent>
      </Card>

      <p className="text-center text-xs text-zinc-500">
        Já tem uma conta?{' '}
        <Link className="font-medium text-zinc-400" href="/entrar">
          Faça login
        </Link>
      </p>
    </>
  )
}
