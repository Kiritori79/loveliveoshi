import { useEffect, useRef, useState } from 'react'
import {
  getItemById,
  getTargetLabels,
  type SelectableGroup,
} from '../../data/selectable'
import type { TargetType } from '../../types'
import { computeThumbSize } from '../../utils/thumbLayout'
import { MemberDropdown } from '../MemberDropdown'
import { MemberImage } from '../MemberImage'

interface MultiOshiRowProps {
  group: SelectableGroup
  target: TargetType
  selected: string[]
  onChange: (selected: string[]) => void
}

export function MultiOshiRow({
  group,
  target,
  selected,
  onChange,
}: MultiOshiRowProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [thumbSize, setThumbSize] = useState({ width: 36, height: 48 })
  const membersRef = useRef<HTMLDivElement>(null)
  const rowRef = useRef<HTMLButtonElement>(null)
  const labels = getTargetLabels(target)

  useEffect(() => {
    const el = membersRef.current
    if (!el) return

    const observer = new ResizeObserver(() => {
      const width = el.clientWidth
      const count = selected.length > 0 ? selected.length : 1
      setThumbSize(computeThumbSize(width, count))
    })

    observer.observe(el)
    const width = el.clientWidth
    const count = selected.length > 0 ? selected.length : 1
    setThumbSize(computeThumbSize(width, count))

    return () => observer.disconnect()
  }, [selected.length])

  return (
    <>
      <button
        type="button"
        className="multi-oshi-row"
        ref={rowRef}
        onClick={() => setDropdownOpen(true)}
      >
        <div className="multi-oshi-logo">
          <img
            src={group.logoImage}
            alt={group.name}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling?.classList.add('visible')
            }}
          />
          <span className="multi-oshi-logo-fallback">{group.name}</span>
        </div>
        <div className="multi-oshi-members" ref={membersRef}>
          {selected.length === 0 ? (
            <span className="multi-oshi-placeholder">{labels.placeholder}</span>
          ) : (
            selected.map((id) => {
              const item = getItemById(id)
              if (!item) return null
              return (
                <MemberImage
                  key={id}
                  src={item.image}
                  alt={item.name}
                  width={thumbSize.width}
                  height={thumbSize.height}
                />
              )
            })
          )}
        </div>
      </button>
      {dropdownOpen && (
        <MemberDropdown
          items={group.items}
          target={target}
          selected={selected}
          mode="multi"
          onChange={onChange}
          onClose={() => setDropdownOpen(false)}
          anchorRect={rowRef.current?.getBoundingClientRect()}
        />
      )}
    </>
  )
}
