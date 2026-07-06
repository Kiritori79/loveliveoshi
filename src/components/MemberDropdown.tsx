import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { Member } from '../data/groups'

interface MemberDropdownProps {
  members: Member[]
  selected: string[]
  mode: 'single' | 'multi'
  onChange: (selected: string[]) => void
  onClose: () => void
  anchorRect?: DOMRect | null
}

export function MemberDropdown({
  members,
  selected,
  mode,
  onChange,
  onClose,
  anchorRect,
}: MemberDropdownProps) {
  const [search, setSearch] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  const filtered = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()),
  )

  const toggleMember = (name: string) => {
    if (mode === 'single') {
      onChange(selected.includes(name) ? [] : [name])
      onClose()
    } else {
      if (selected.includes(name)) {
        onChange(selected.filter((s) => s !== name))
      } else {
        onChange([...selected, name])
      }
    }
  }

  const style: CSSProperties = anchorRect
    ? {
        position: 'fixed',
        top: Math.min(anchorRect.bottom + 4, window.innerHeight - 320),
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
          placeholder="搜索成员..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="member-dropdown-list">
          {filtered.map((member) => (
            <li key={member.name}>
              <button
                type="button"
                className={`member-dropdown-item${
                  selected.includes(member.name) ? ' selected' : ''
                }`}
                onClick={() => toggleMember(member.name)}
              >
                <img src={member.image} alt={member.name} />
                <span>{member.name}</span>
                {mode === 'multi' && selected.includes(member.name) && (
                  <span className="member-dropdown-check">✓</span>
                )}
              </button>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="member-dropdown-empty">未找到成员</li>
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
