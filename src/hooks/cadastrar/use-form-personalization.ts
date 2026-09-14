import { useCallback, useMemo, useState } from 'react'

import { quickTags } from '@/types/personalization-form'

export default function useFormPersonalization() {
  const [cefr, setCefr] = useState('B1')
  const [profession, setProfession] = useState(
    'Senior Full-Stack & DevOps Engineer'
  )
  const [scenarios, setScenarios] = useState<string[]>([
    'code-reviews',
    'daily-standups',
    'design-docs',
  ])

  const handleQuickTag = useCallback((tag: string) => {
    setProfession(tag.replace('+ ', ''))
  }, [])

  const quickTagHandlers = useMemo(
    () =>
      Object.fromEntries(
        quickTags.map((tag) => [tag, () => handleQuickTag(tag)])
      ),
    [handleQuickTag]
  )

  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
  }, [])

  const handleToggleScenario = useCallback((id: string) => {
    setScenarios((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }, [])

  const scenarioHandlers = useMemo(
    () =>
      Object.fromEntries(
        ['code-reviews', 'daily-standups', 'design-docs'].map((id) => [
          id,
          () => handleToggleScenario(id),
        ])
      ),
    [handleToggleScenario]
  )

  const handleProfessionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setProfession(e.target.value)
    },
    []
  )

  return {
    cefr,
    handleFormSubmit,
    handleProfessionChange,
    profession,
    quickTagHandlers,
    scenarioHandlers,
    scenarios,
    setCefr,
    setProfession,
  }
}
