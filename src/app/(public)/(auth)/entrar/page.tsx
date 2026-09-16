'use client'

import { AtSign, Eye, EyeOff, Lock } from 'lucide-react'
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
import useLogin from '@/hooks/auth/entrar/use-login'
import Emblem from '@/images/emblem.png'

export default function Entrar() {
  const { form, onSubmit, handleTogglePassword, showPassword } = useLogin()

  return (
    <section className="flex max-h-screen w-full items-center justify-center min-[1500px]:h-[80vh]">
      <Card className="w-full max-w-2xl border border-zinc-800 bg-zinc-900">
        <CardHeader className="flex flex-col items-center justify-center gap-4 text-center">
          <Image
            alt="Emblem"
            className="h-20 w-20"
            height={100}
            src={Emblem}
            width={100}
          />

          <CardTitle className="text-2xl">Bem-vindo(a) de volta</CardTitle>
          <CardDescription>
            Mantenha sua sequência diária de produção no idioma.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8">
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            {/* EMAIL DO USUÁRIO */}
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

            {/* SENHA DO USUÁRIO */}
            <div className="space-y-2">
              <Label className="pl-2" htmlFor="password">
                Senha
              </Label>

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
            </div>

            <div>
              <Button
                className="w-full rounded-xl bg-primary/50 text-white hover:bg-primary"
                disabled={form.formState.isSubmitting}
                type="submit"
                variant="default"
              >
                {form.formState.isSubmitting
                  ? 'Entrando...'
                  : 'Faça login no UAIFlow'}
              </Button>
            </div>
          </form>
        </CardContent>

        <p className="text-center text-xs text-zinc-500">
          Não tem uma conta?{' '}
          <Link
            className="font-medium text-zinc-400 hover:underline"
            href="/cadastrar"
          >
            Cadastre-se.
          </Link>
        </p>
      </Card>
    </section>
  )
}
