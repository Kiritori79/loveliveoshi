import { ModeSelect } from '../components/ModeSelect'

interface HomePageProps {
  onSelectSingle: () => void
  onSelectMulti: () => void
}

export function HomePage({ onSelectSingle, onSelectMulti }: HomePageProps) {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-title-row">
          <img className="home-title-logo" src="/assets/title.png" alt="LoveLive!" />
          <h1 className="home-title">
            <span className="chart-header-kana">推し</span>图鉴生成器
          </h1>
        </div>
        <p className="home-subtitle">记录你最喜欢的 LoveLive! 成员，生成专属推し图鉴</p>
      </header>
      <ModeSelect onSelectSingle={onSelectSingle} onSelectMulti={onSelectMulti} />
    </div>
  )
}
