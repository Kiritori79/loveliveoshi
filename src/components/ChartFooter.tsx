interface ChartFooterProps {
  compact?: boolean
}

export function ChartFooter({ compact }: ChartFooterProps) {
  return (
    <footer className={`chart-footer${compact ? ' chart-footer--compact' : ''}`}>
      <span>制表人 雾鸟kiritori</span>
    </footer>
  )
}
