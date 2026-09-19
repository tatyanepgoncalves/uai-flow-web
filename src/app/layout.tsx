import type { Metadata } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toast'
import { AuthProvider } from '@/context/auth-context'
import { cn } from '@/lib/utils'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  description: 'Sistema de aprendizagem de idiomas.',
  title: 'UAI Flow',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen w-full flex-col bg-background-dark font-sans text-text-primary',
          geistSans.variable,
          jetBrainsMono.variable
        )}
        suppressHydrationWarning
      >
        <Toaster />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
