import Image from 'next/image'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Emblem from '@/images/emblem.png'

export default function HeaderCadastrar() {
  return (
    <CardHeader className="flex flex-col items-center justify-center gap-4 text-center">
      <Image
        alt="Emblem"
        className="h-20 w-20"
        height={100}
        src={Emblem}
        width={100}
      />

      <div className="flex flex-col items-center justify-center gap-2">
        <CardTitle className="text-2xl">Crie sua conta no UAIFlow</CardTitle>
        <CardDescription>
          Aquisição de linguagem sintática voltada para engenheiros de software
          e pensadores sistêmicos.
        </CardDescription>

        <div className="flex w-fit items-center justify-center rounded-[12px] bg-[#252A34] px-4 py-1">
          <p className="text-zinc-300">
            Pílulas diárias de inglês (níveis CEFR A1/A2/B1/B2) para acesso
            imediato
          </p>
        </div>
      </div>
    </CardHeader>
  )
}
