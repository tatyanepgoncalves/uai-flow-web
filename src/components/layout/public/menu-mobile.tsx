'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { menuNav } from '@/types/menu'

export default function MenuMobile() {
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`)
          }
        }
      },
      // Define o limite e a margem de disparo para sincronizar com o header fixo
      { rootMargin: '-20% 0px -50% 0px', threshold: 0 }
    )

    for (const item of menuNav) {
      const element = document.querySelector(item.href)
      if (element) {
        observer.observe(element)
      }
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button
              className="h-9 w-9 border border-zinc-700/80 bg-[#191c24] p-0 text-zinc-200 hover:bg-zinc-800 hover:text-white"
              variant="outline"
            />
          }
        >
          <Menu className="h-5 w-5" />
        </SheetTrigger>

        <SheetContent className="flex flex-col justify-between border-zinc-800 bg-[#0f141d] p-6 text-zinc-100">
          <div className="flex flex-col gap-2 pt-8">
            <span className="mb-2 font-mono text-xs text-zinc-500 uppercase tracking-wider">
              Navegação
            </span>
            {menuNav.map((item) => {
              const isActive = activeHash === item.href
              const handleLink = () => {
                setActiveHash(item.href)
              }
              return (
                <Link
                  className={cn(
                    'flex items-center rounded-lg px-3 py-2.5 font-medium text-sm transition-all',
                    isActive
                      ? 'bg-violet-600/10 font-semibold text-violet-400'
                      : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                  )}
                  href={item.href}
                  key={item.label}
                  onClick={handleLink}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <SheetFooter className="flex flex-col gap-3 border-zinc-800 border-t pt-6 sm:flex-col">
            <Button
              className="w-full justify-center bg-violet-600 font-medium text-white hover:bg-violet-700"
              render={<Link href="/cadastrar" />}
            >
              Criar conta
            </Button>
            <Button
              className="w-full justify-center border-zinc-700/80 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              render={<Link href="/entrar" />}
              variant="ghost"
            >
              Entrar
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
