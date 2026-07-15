import { useState } from 'react'
import { BandGrid } from '../components/BandGrid'
import type { ChartMode, SelectionState, TargetType } from '../types'
import { ChartPageLayout } from './ChartPageLayout'

interface SingleOshiPageProps {
  mode: ChartMode
  target: TargetType
  onBack: () => void
  onSwitchMode: () => void
}

export function SingleOshiPage({
  mode,
  target,
  onBack,
  onSwitchMode,
}: SingleOshiPageProps) {
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
      compact
    >
      <BandGrid
        target={target}
        selections={selections}
        onSelectionChange={handleSelectionChange}
      />
    </ChartPageLayout>
  )
}
