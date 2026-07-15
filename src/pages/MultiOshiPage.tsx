import { useState } from 'react'
import { MultiOshiTable } from '../components/multi/MultiOshiTable'
import type { ChartMode, SelectionState, TargetType } from '../types'
import { ChartPageLayout } from './ChartPageLayout'

interface MultiOshiPageProps {
  mode: ChartMode
  target: TargetType
  onBack: () => void
  onSwitchMode: () => void
}

export function MultiOshiPage({
  mode,
  target,
  onBack,
  onSwitchMode,
}: MultiOshiPageProps) {
  const [selections, setSelections] = useState<SelectionState>({})

  const handleSelectionChange = (groupId: string, selected: string[]) => {
    setSelections((prev) => ({ ...prev, [groupId]: selected }))
  }

  return (
    <ChartPageLayout
      mode={mode}
      target={target}
      onBack={onBack}
      onSwitchMode={onSwitchMode}
    >
      <MultiOshiTable
        target={target}
        selections={selections}
        onSelectionChange={handleSelectionChange}
      />
    </ChartPageLayout>
  )
}
