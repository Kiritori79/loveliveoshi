import { useState } from 'react'
import { ChartFooter } from '../components/ChartFooter'
import { ChartHeader } from '../components/ChartHeader'
import { PageBackButton } from '../components/PageBackButton'
import type { ChartMode, TargetType } from '../types'

interface ChartPageLayoutProps {
  onBack: () => void
  onSwitchMode: () => void
  mode: ChartMode
  target: TargetType
  children: React.ReactNode
  compact?: boolean
}

export function ChartPageLayout({
  onBack,
  onSwitchMode,
  mode,
  target,
  children,
  compact = false,
}: ChartPageLayoutProps) {
  const [cn, setCn] = useState('')
  const switchLabel =
    mode === 'single' ? '切换到多推模式' : '切换到单推模式'

  return (
    <div className="chart-page">
      <PageBackButton onBack={onBack} />
      <div className="chart-editor">
        <label className="cn-input-label">
          <span className="cn-input-label-text">CN（昵称）</span>
          <input
            type="text"
            className="cn-input"
            placeholder="输入你的昵称"
            value={cn}
            onChange={(e) => setCn(e.target.value)}
            maxLength={20}
          />
        </label>
      </div>

      <div className="chart-preview-wrap">
        <div className={`chart-canvas${compact ? ' chart-canvas--compact' : ''}`}>
          <ChartHeader cn={cn} target={target} compact={compact} />
          {children}
          <ChartFooter compact={compact} />
        </div>
      </div>

      <nav className="chart-nav">
        <button
          type="button"
          className="chart-nav-btn chart-nav-btn--primary"
          onClick={onSwitchMode}
        >
          {switchLabel}
        </button>
      </nav>
    </div>
  )
}
