import { useState } from 'react'
import { BandGrid } from '../components/BandGrid'
import type { SelectionState } from '../types'
import { ChartPageLayout } from './ChartPageLayout'

interface SingleOshiPageProps {
  onBack: () => void
  onSwitchMode: () => void
}

export function SingleOshiPage({ onBack, onSwitchMode }: SingleOshiPageProps) {
  const [selections, setSelections] = useState<SelectionState>({})

  const handleSelectionChange = (groupId: string, selected: string[]) => {
    setSelections((prev) => ({ ...prev, [groupId]: selected }))
  }

  return (
    <ChartPageLayout onBack={onBack} onSwitchMode={onSwitchMode} compact>
      <BandGrid selections={selections} onSelectionChange={handleSelectionChange} />
    </ChartPageLayout>
  )
}
