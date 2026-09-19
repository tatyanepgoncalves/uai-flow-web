'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  footerLegal,
  footerProducts,
  footerScience,
  footerSocial,
} from '@/types/footer'

export default function Footer() {
  const pathname = usePathname()
  const isVisible = pathname === '/'

  const year = new Date().getFullYear()

  return (
    <footer
      className={cn(
        'border-zinc-800/80 border-t bg-[#090d14] py-12 text-xs text-zinc-400',
        isVisible ? 'block' : 'hidden'
      )}
    >
      <div className="mx-auto max-w-372 px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">
          <div className="md:col-span-2">
            <span className="font-bold font-mono text-lg text-white">
              UAIFlow
            </span>
            <p className="mt-3 max-w-sm text-xs text-zinc-500 leading-relaxed">
              Syntactic Acquisition Engine for Engineers & Tech Professionals.
              Precision chunking and automated algorithmic recall for CEFR
              fluency.
            </p>
          </div>

          <div>
            <span className="font-semibold text-[11px] text-white uppercase tracking-wider">
              Produto
            </span>
            <div className="mt-3 flex flex-col gap-2 text-zinc-500">
              {footerProducts.map((product) => (
                <Link
                  className="hover:text-zinc-300"
                  href={product.link}
                  key={product.name}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="font-semibold text-[11px] text-white uppercase tracking-wider">
              Ciência
            </span>
            <div className="mt-3 flex flex-col gap-2 text-zinc-500">
              {footerScience.map((science) => (
                <Link
                  className="hover:text-zinc-300"
                  href={science.link}
                  key={science.name}
                >
                  {science.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="font-semibold text-[11px] text-white uppercase tracking-wider">
              Legal & Conexão
            </span>

            <div className="mt-3 flex flex-col gap-2 text-zinc-500">
              {footerLegal.map((legal) => (
                <Link
                  className="hover:text-zinc-300"
                  href={legal.link}
                  key={legal.name}
                >
                  {legal.name}
                </Link>
              ))}

              <div className="flex items-center gap-2 text-zinc-400">
                {footerSocial.map((social) => (
                  <Link
                    className="hover:text-white"
                    href={social.link}
                    key={social.name}
                  >
                    {social.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-zinc-800/60 border-t pt-6 text-zinc-500 sm:flex-row">
          <p>UAIFlow © {year}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span>Motor: Online • Latência 18ms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
