import { useEffect, useRef, useState } from 'react'
import type { Group } from '../../data/groups'
import { getMemberByName } from '../../data/groups'
import { computeThumbSize } from '../../utils/thumbLayout'
import { MemberDropdown } from '../MemberDropdown'
import { MemberImage } from '../MemberImage'

interface MultiOshiRowProps {
  group: Group
  selected: string[]
  onChange: (selected: string[]) => void
}

export function MultiOshiRow({ group, selected, onChange }: MultiOshiRowProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [thumbSize, setThumbSize] = useState({ width: 36, height: 48 })
  const membersRef = useRef<HTMLDivElement>(null)
  const rowRef = useRef<HTMLButtonElement>(null)

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
            <span className="multi-oshi-placeholder">请选择成员</span>
          ) : (
            selected.map((name) => {
              const member = getMemberByName(group.id, name)
              if (!member) return null
              return (
                <MemberImage
                  key={name}
                  src={member.image}
                  alt={name}
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
          members={group.members}
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
