import { useState } from 'react'
import { ChartFooter } from '../components/ChartFooter'
import { ChartHeader } from '../components/ChartHeader'

interface ChartPageLayoutProps {
  onBack: () => void
  onSwitchMode: () => void
  children: React.ReactNode
  compact?: boolean
}

export function ChartPageLayout({
  onBack,
  onSwitchMode,
  children,
  compact = false,
}: ChartPageLayoutProps) {
  const [cn, setCn] = useState('')

  return (
    <div className="chart-page">
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
          <ChartHeader cn={cn} compact={compact} />
          {children}
          <ChartFooter compact={compact} />
        </div>
      </div>

      <nav className="chart-nav">
        <button type="button" className="chart-nav-btn" onClick={onSwitchMode}>
          切换模式
        </button>
        <button type="button" className="chart-nav-btn chart-nav-btn--primary" onClick={onBack}>
          返回首页
        </button>
      </nav>
    </div>
  )
}
