'use client'

import { cn } from 'cn'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Logo from '@/images/logo.png'
import { menuNav } from '@/types/menu'
import MenuMobile from './menu-mobile'

export default function Header() {
  const pathname = usePathname()
  const isVisible = pathname === '/'
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
    <header
      className={cn(
        isVisible ? 'flex' : 'hidden',
        'fixed top-0 left-0 z-50 h-20 w-full items-center justify-center border-neutral-800 border-b bg-background-dark/80 p-4 backdrop-blur-md lg:p-6'
      )}
    >
      <section className="flex w-full max-w-372 items-center justify-between">
        <Link href="/">
          <Image alt="Logo do UAIFlow" height={100} src={Logo} width={100} />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {menuNav.map((navLink) => {
            const isActive = activeHash === navLink.href
            const handleLink = () => {
              setActiveHash(navLink.href)
            }

            return (
              <Link
                className={cn(
                  'py-1 font-medium text-sm transition-colors duration-300 hover:text-white',
                  isActive
                    ? 'border-violet-500 border-b-2 text-white'
                    : 'text-zinc-400'
                )}
                href={navLink.href}
                key={navLink.label}
                onClick={handleLink}
              >
                {navLink.label}
              </Link>
            )
          })}
        </nav>

        {/* Botões do Desktop com alinhamento perfeito */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            className="bg-transparent text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
            render={<Link href="/entrar" />}
            variant="ghost"
          >
            Entrar
          </Button>
          <Button
            className="bg-violet-600 font-medium text-white hover:bg-violet-700"
            render={<Link href="/cadastrar" />}
          >
            Cadastrar
          </Button>
        </div>

        {/* Botão e acionadores da versão Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <Button
            className="bg-violet-600 text-white text-xs hover:bg-violet-700"
            render={<Link href="/cadastrar" />}
            size="sm"
          >
            Cadastrar
          </Button>
          <MenuMobile />
        </div>
      </section>
    </header>
  )
}
