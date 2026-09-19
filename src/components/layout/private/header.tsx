'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/images/logo.png'
import { cn } from '@/lib/utils'
import { menuNavPrivate } from '@/types/menu'
import HeaderActions from './header-actions'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 flex h-20 w-full items-center justify-center border-neutral-700 border-b bg-background-dark p-4 backdrop-blur-md lg:p-6">
      <div className="flex w-full max-w-375 items-center justify-between">
        <Link href="/central-chunks">
          <Image alt="Logo do UAIFlow" height={100} src={Logo} width={100} />
        </Link>

        <nav className="flex items-center gap-6">
          {menuNavPrivate.map((navLink) => {
            const isActive = pathname === navLink.href

            return (
              <Link
                className={cn(
                  'p-1 font-medium text-sm transition-colors duration-300 hover:border-text-bright/80 hover:border-b hover:text-text-bright/80',
                  isActive
                    ? 'border-text-bright border-b text-text-bright'
                    : 'text-text-primary/60'
                )}
                href={navLink.href}
                key={navLink.href}
              >
                {navLink.label}
              </Link>
            )
          })}
        </nav>

        <HeaderActions />
      </div>
    </header>
  )
}
