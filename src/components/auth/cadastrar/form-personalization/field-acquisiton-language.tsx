import { Languages } from 'lucide-react'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { languagesEnglish } from '@/types/personalization-form'

export default function FieldAcquisitionLanguage() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
        <Label htmlFor="language">Linguagem de Aquisição de Alvo</Label>
        <span className="text-zinc-600">target.locale</span>
      </div>

      <Select defaultValue="English (US) 🇺🇸 (Silicon Valley Dialect)">
        <SelectTrigger
          aria-labelledby="language"
          className="h-11 w-full border-zinc-800 bg-zinc-900/80 text-sm text-zinc-200 focus:ring-violet-500"
          id="language"
        >
          <div className="flex items-center gap-2">
            <Languages className="h-4 w-4 text-zinc-400" />
            <SelectValue placeholder="Select Language" />
          </div>
        </SelectTrigger>
        <SelectContent className="border-zinc-800 bg-zinc-900 text-zinc-200">
          {languagesEnglish.map((lang) => (
            <SelectItem key={lang.code} value={lang.language}>
              {lang.language}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
