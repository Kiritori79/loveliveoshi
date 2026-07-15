interface PageBackButtonProps {
  onBack: () => void
  label?: string
}

export function PageBackButton({
  onBack,
  label = '← 返回上一页',
}: PageBackButtonProps) {
  return (
    <button type="button" className="page-back-btn" onClick={onBack}>
      {label}
    </button>
  )
}
