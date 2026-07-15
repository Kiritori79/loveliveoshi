import { PageBackButton } from '../components/PageBackButton'
import { SiteCredit } from '../components/SiteCredit'
import type { ChartMode, TargetType } from '../types'

interface TargetOption {
  type: TargetType
  icon: string
  title: string
  desc: string
}

const OPTIONS: TargetOption[] = [
  {
    type: 'character',
    icon: '◇',
    title: '角色图鉴',
    desc: '选择 LoveLive! 中喜欢的角色。',
  },
  {
    type: 'voice_actor',
    icon: '♪',
    title: '声优图鉴',
    desc: '选择 LoveLive! 中喜欢的声优。',
  },
  {
    type: 'character_voice',
    icon: '☆',
    title: '角色 & 声优图鉴',
    desc: '角色与声优各自独立，可自由多选组合。',
  },
]

interface TargetSelectPageProps {
  mode: ChartMode
  onSelectTarget: (target: TargetType) => void
  onBack: () => void
}

export function TargetSelectPage({
  mode,
  onSelectTarget,
  onBack,
}: TargetSelectPageProps) {
  const visibleOptions = OPTIONS.filter(
    (option) => mode === 'multi' || option.type !== 'character_voice',
  )

  return (
    <div className="step-page">
      <PageBackButton onBack={onBack} />
      <header className="step-header">
        <h1 className="step-title">
          选择你的<span className="chart-header-kana">推し</span>对象
        </h1>
        <p className="step-subtitle">
          {mode === 'single'
            ? '单推模式可选择角色图鉴或声优图鉴'
            : '决定图鉴记录的是角色、声优，还是两者一起'}
        </p>
      </header>
      <div className="target-select">
        {visibleOptions.map((option) => (
          <button
            key={option.type}
            type="button"
            className="target-card"
            onClick={() => onSelectTarget(option.type)}
          >
            <div className="target-card-icon">{option.icon}</div>
            <div className="target-card-body">
              <h3 className="target-card-title">{option.title}</h3>
              <p className="target-card-desc">{option.desc}</p>
            </div>
          </button>
        ))}
      </div>
      <SiteCredit />
    </div>
  )
}
