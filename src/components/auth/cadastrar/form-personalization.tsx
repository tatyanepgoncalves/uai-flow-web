'use client'

import { ArrowLeft, Code2, Languages, Sparkles } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {  languagesEnglish, cefrOptions, quickTags } from '@/lib/personalization-form'
import { cn } from '@/lib/utils'



export default function FormPersonalization() {
  const [cefr, setCefr] = useState('B1')
  const [profession, setProfession] = useState(
    'Senior Full-Stack & DevOps Engineer'
  )
  const [scenarios, setScenarios] = useState<string[]>([
    'code-reviews',
    'daily-standups',
    'design-docs',
  ])

  const toggleScenario = (id: string) => {
    setScenarios((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6 rounded-2xl border border-zinc-700 bg-zinc-900 p-6 text-zinc-100 shadow-2xl backdrop-blur-xl">
      {/* Header */}
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-900/40 text-violet-400">
          <Sparkles className="h-5 w-5" />
        </div>
        <h1 className="font-bold text-2xl text-white tracking-tight">
          Calibre seu mecanismo de aprendizado de IA
        </h1>
        <p className="text-xs text-zinc-400">
          Adapte a síntese de blocos de conteúdo à sua profissão, ao seu nível
          de proficiência (CEFR) e à sua rotina de trabalho.
        </p>

        {/* Step Badge */}
        <div className="mt-1 flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 font-mono text-xs text-zinc-400">
          <span className="text-violet-400">⚡ Step 2 of 2</span>
          <span className="text-zinc-600">•</span>
          <span>60-second neural calibration</span>
        </div>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Campo 1: Target Acquisition Language */}
        <div className="space-y-2">
          <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
            <Label htmlFor="language">Linguagem de Aquisição de Alvo</Label>
            <span className="text-zinc-600">target.locale</span>
          </div>

          <Select defaultValue="en-us">
            <SelectTrigger
              aria-labelledby='language'
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

        {/* Campo 2: Current CEFR Fluency Benchmark (Radio Cards) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
            <span>Referência atual de proficiência do CEFR</span>
            <span className="text-zinc-600">syntax.calibrate()</span>
          </div>

          <RadioGroup
            className="grid grid-cols-1 gap-2.5 sm:grid-cols-2"
            onValueChange={setCefr}
            value={cefr}
          >
            {cefrOptions.map((item) => {
              const isSelected = cefr === item.id
              return (
                <label
                  aria-labelledby='language'
                  className={cn('relative flex cursor-pointer flex-col justify-between rounded-xl border p-3.5 transition-all', isSelected ? 'border-violet-500 bg-violet-950/20 ring-1 ring-violet-500' : 'border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700')}

                  key={item.id}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-white">
                        {item.level}
                      </span>
                      <span className="text-xs text-zinc-400">
                        {item.title}
                      </span>
                    </div>
                    <RadioGroupItem
                      className="sr-only"
                      id={item.id}
                      value={item.id}
                    />
                    <div
                      className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                        isSelected
                          ? 'border-violet-400 bg-violet-600'
                          : 'border-zinc-600 bg-transparent'
                      }`}
                    >
                      {isSelected ? (
                        <div className="h-1.5 w-1.5 rounded-full bg-white" />
                      ) : null}
                    </div>
                  </div>

                  {item.badge && isSelected ? (
                    <span className="mt-1 w-fit rounded bg-violet-500/20 px-1.5 py-0.5 font-mono font-semibold text-[9px] text-violet-300 tracking-wider">
                      {item.badge}
                    </span>
                  ) : null}

                  <p className="mt-2 text-xs text-zinc-400">
                    {item.description}
                  </p>
                </label>
              )
            })}
          </RadioGroup>
        </div>

        {/* Campo 3: Primary Discipline / Profession */}
        <div className="space-y-2">
          <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
            <Label htmlFor="profession">Disciplina / Profissão</Label>
            <span className="text-zinc-600">lexicon.domain</span>
          </div>

          <div className="relative flex items-center">
            <Code2 className="pointer-events-none absolute left-3.5 h-4 w-4 text-zinc-400" />
            <Input
              className="h-11 border-zinc-800 bg-zinc-900/80 pl-10 text-sm text-zinc-200 focus-visible:ring-violet-500"
              id="profession"
              onChange={(e) => setProfession(e.target.value)}
              value={profession}
            />
          </div>

          {/* Quick Tags */}
          <div className="flex items-center gap-2 pt-1 text-xs">
            <span className="text-zinc-500">Tags rápidas:</span>
            <div className="flex flex-wrap gap-1.5">
              {quickTags.map((tag) => (
                <button
                  className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
                  key={tag}
                  onClick={() => setProfession(tag.replace('+ ', ''))}
                  type="button"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Campo 4: Primary Focus Scenarios (Checkboxes) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
            <span>Cenários de Foco Principal</span>
            <span className="text-zinc-600">workflow.scenarios</span>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {[
              { id: 'code-reviews', label: 'Code Reviews & PR Comments' },
              { id: 'daily-standups', label: 'Daily Standups & Sprints' },
              { id: 'design-docs', label: 'Design Docs & RFCs' },
            ].map((scenario) => {
              const isChecked = scenarios.includes(scenario.id)
              return (
                <label
                  className={`flex cursor-pointer items-center gap-2.5 rounded-xl border p-3 text-xs transition-all ${
                    isChecked
                      ? 'border-violet-500/50 bg-violet-950/20 text-zinc-100'
                      : 'border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700'
                  }`}
                  key={scenario.id}
                >
                  <Checkbox
                    checked={isChecked}
                    className="border-zinc-700 data-[state=checked]:border-violet-600 data-[state=checked]:bg-violet-600"
                    id={scenario.id}
                    onCheckedChange={() => toggleScenario(scenario.id)}
                  />
                  <span className="font-medium leading-tight">
                    {scenario.label}
                  </span>
                </label>
              )
            })}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          className="h-12 w-full rounded-xl bg-violet-600 font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all hover:bg-violet-500"
          type="submit"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Concluir cadastro e abrir o painel
          <Sparkles className="ml-2 h-4 w-4" />
        </Button>

        {/* Voltar */}
        <div className="text-center">
          <button
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-zinc-300"
            type="button"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Account
          </button>
        </div>
      </form>
    </div>
  )
}
