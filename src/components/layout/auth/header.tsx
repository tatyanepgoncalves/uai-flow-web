'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Logo from '@/images/logo.png'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="flex h-20 w-full items-center justify-center p-4 backdrop-blur-md lg:p-6">
      <div className="flex w-full max-w-375 items-center justify-between">
        <Link href="/">
          <Image alt="Logo" height={100} src={Logo} width={100} />
        </Link>

        <div>
          {pathname === '/entrar' ? null : (
            <Button render={<Link href="/entrar" />} variant="ghost">
              Entrar
            </Button>
          )}

          {pathname === '/cadastrar' ? null : (
            <Button render={<Link href="/cadastrar" />} variant="ghost">
              Cadastrar
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
