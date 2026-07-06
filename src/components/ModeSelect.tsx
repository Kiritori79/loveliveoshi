interface ModeSelectProps {
  onSelectSingle: () => void
  onSelectMulti: () => void
}

export function ModeSelect({ onSelectSingle, onSelectMulti }: ModeSelectProps) {
  return (
    <div className="mode-select">
      <button type="button" className="mode-card" onClick={onSelectSingle}>
        <div className="mode-card-icon single-icon">♡</div>
        <h3 className="mode-card-title">单推模式</h3>
        <p className="mode-card-desc">每个团体只能选择一位成员</p>
      </button>
      <button type="button" className="mode-card" onClick={onSelectMulti}>
        <div className="mode-card-icon multi-icon">♡♡</div>
        <h3 className="mode-card-title">多推模式</h3>
        <p className="mode-card-desc">每个团体可以选择多位成员</p>
      </button>
    </div>
  )
}
