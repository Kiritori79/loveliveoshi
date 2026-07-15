import { SiteCredit } from '../components/SiteCredit'

interface HomePageProps {
  onStart: () => void
}

export function HomePage({ onStart }: HomePageProps) {
  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="home-hero-glow" aria-hidden="true" />
        <div className="home-hero-orbit home-hero-orbit--a" aria-hidden="true" />
        <div className="home-hero-orbit home-hero-orbit--b" aria-hidden="true" />

        <header className="home-header">
          <p className="home-kicker">School Idol Memory</p>
          <div className="home-title-row">
            <img
              className="home-title-logo"
              src="/assets/title.png"
              alt="LoveLive!"
            />
            <h1 className="home-title">
              <span className="chart-header-kana">推し</span>图鉴生成器
            </h1>
          </div>
          <p className="home-subtitle">
            选择角色或声优，一键生成专属 LoveLive! 推し图鉴
          </p>
        </header>

        <button type="button" className="home-start-btn" onClick={onStart}>
          <span className="home-start-btn-label">开始制作</span>
          <span className="home-start-btn-arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
      <SiteCredit />
    </div>
  )
}
