import { ModeSelect } from '../components/ModeSelect'
import { PageBackButton } from '../components/PageBackButton'
import { SiteCredit } from '../components/SiteCredit'
import type { ChartMode } from '../types'

interface ModeSelectPageProps {
  onSelectMode: (mode: ChartMode) => void
  onBack: () => void
}

export function ModeSelectPage({ onSelectMode, onBack }: ModeSelectPageProps) {
  return (
    <div className="step-page">
      <PageBackButton onBack={onBack} />
      <header className="step-header">
        <h1 className="step-title">
          选择<span className="chart-header-kana">推し</span>模式
        </h1>
      </header>
      <ModeSelect
        onSelectSingle={() => onSelectMode('single')}
        onSelectMulti={() => onSelectMode('multi')}
      />
      <SiteCredit />
    </div>
  )
}
