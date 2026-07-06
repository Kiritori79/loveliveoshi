import { useState } from 'react'
import { MultiOshiTable } from '../components/multi/MultiOshiTable'
import type { SelectionState } from '../types'
import { ChartPageLayout } from './ChartPageLayout'

interface MultiOshiPageProps {
  onBack: () => void
  onSwitchMode: () => void
}

export function MultiOshiPage({ onBack, onSwitchMode }: MultiOshiPageProps) {
  const [selections, setSelections] = useState<SelectionState>({})

  const handleSelectionChange = (groupId: string, selected: string[]) => {
    setSelections((prev) => ({ ...prev, [groupId]: selected }))
  }

  return (
    <ChartPageLayout onBack={onBack} onSwitchMode={onSwitchMode}>
      <MultiOshiTable
        selections={selections}
        onSelectionChange={handleSelectionChange}
      />
    </ChartPageLayout>
  )
}
