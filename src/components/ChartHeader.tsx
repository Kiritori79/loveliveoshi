import type { TargetType } from '../types'

interface ChartHeaderProps {
  cn: string
  target: TargetType
  compact?: boolean
}

export function ChartHeader({ cn, target, compact }: ChartHeaderProps) {
  const trimmedCn = cn.trim()
  const showCv = target === 'voice_actor'

  return (
    <header className={`chart-header${compact ? ' chart-header--compact' : ''}`}>
      <h2 className="chart-header-title">
        <span className="chart-header-text">
          {trimmedCn ? `${trimmedCn}的 ` : '我的 '}
        </span>
        <img
          className="chart-header-title-logo"
          src="/assets/title.png"
          alt="LoveLive!"
        />
        <span className="chart-header-text">
          {showCv && <span className="chart-header-cv">CV </span>}
          <span className="chart-header-kana">推し</span>图鉴
        </span>
      </h2>
    </header>
  )
}
