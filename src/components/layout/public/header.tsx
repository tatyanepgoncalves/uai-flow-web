'use client'

import { cn } from 'cn'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Logo from '@/images/logo.png'
import { menuNav } from '@/types/menu'

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
        'fixed top-0 left-0 z-50 h-20 w-full items-center justify-center border-neutral-700 border-b bg-background-dark p-4 backdrop-blur-md lg:p-6'
      )}
    >
      <section className="flex w-full max-w-372 items-center justify-between">
        <Link href="/">
          <Image alt="Logo do UAIFlow" height={100} src={Logo} width={100} />
        </Link>

        <nav className="flex items-center gap-6">
          {menuNav.map((navLink) => {
            const isActive = activeHash === navLink.href
            const handleLink = () => {
              setActiveHash(navLink.href)
            }

            return (
              <Link
                className={cn(
                  'py-1 font-medium text-sm transition-colors duration-300 hover:border-text-bright/80 hover:border-b hover:text-text-bright/80',
                  isActive
                    ? 'border-text-bright border-b text-text-bright'
                    : 'text-text-primary/60'
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

        <div>
          <Button render={<Link href="/entrar" />} variant="link">
            Entrar
          </Button>
          <Button render={<Link href="/cadastrar" />}>Cadastrar</Button>
        </div>
      </section>
    </header>
  )
}
