import { useEffect, useRef, useState, type CSSProperties } from 'react'
import {
  getTargetLabels,
  type SelectableItem,
} from '../data/selectable'
import type { TargetType } from '../types'

interface MemberDropdownProps {
  items: SelectableItem[]
  target: TargetType
  selected: string[]
  mode: 'single' | 'multi'
  onChange: (selected: string[]) => void
  onClose: () => void
  anchorRect?: DOMRect | null
}

export function MemberDropdown({
  items,
  target,
  selected,
  mode,
  onChange,
  onClose,
  anchorRect,
}: MemberDropdownProps) {
  const [search, setSearch] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const labels = getTargetLabels(target)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  )

  const toggleItem = (id: string) => {
    if (mode === 'single') {
      onChange(selected.includes(id) ? [] : [id])
      onClose()
      return
    }

    if (selected.includes(id)) {
      onChange(selected.filter((s) => s !== id))
    } else {
      onChange([...selected, id])
    }
  }

  const style: CSSProperties = anchorRect
    ? {
        position: 'fixed',
        top: Math.min(anchorRect.bottom + 4, window.innerHeight - 360),
        left: Math.min(anchorRect.left, window.innerWidth - 280),
        width: Math.max(anchorRect.width, 260),
      }
    : {}

  return (
    <div className="member-dropdown-overlay">
      <div className="member-dropdown" ref={dropdownRef} style={style}>
        <input
          type="text"
          className="member-dropdown-search"
          placeholder={labels.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="member-dropdown-list">
          {filtered.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`member-dropdown-item${
                  selected.includes(item.id) ? ' selected' : ''
                }`}
                onClick={() => toggleItem(item.id)}
              >
                <img src={item.image} alt={item.name} />
                <span className="member-dropdown-label">
                  <span>{item.name}</span>
                </span>
                {mode === 'multi' && selected.includes(item.id) && (
                  <span className="member-dropdown-check">✓</span>
                )}
              </button>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="member-dropdown-empty">{labels.empty}</li>
          )}
        </ul>
        {mode === 'multi' && (
          <button type="button" className="member-dropdown-done" onClick={onClose}>
            完成
          </button>
        )}
      </div>
    </div>
  )
}
