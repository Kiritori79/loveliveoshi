import { useLayoutEffect, useRef, useState } from 'react'
import type { Group } from '../data/groups'
import { getMemberByName } from '../data/groups'
import { fitMemberAspectBox, type ThumbSize } from '../utils/thumbLayout'
import { MemberDropdown } from './MemberDropdown'
import { MemberImage } from './MemberImage'

interface BandCardProps {
  group: Group
  selected: string[]
  onChange: (selected: string[]) => void
}

export function BandCard({ group, selected, onChange }: BandCardProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [memberSize, setMemberSize] = useState<ThumbSize>({ width: 0, height: 0 })
  const cardRef = useRef<HTMLButtonElement>(null)
  const memberRef = useRef<HTMLDivElement>(null)
  const selectedMember = selected[0]
  const member = selectedMember
    ? getMemberByName(group.id, selectedMember)
    : undefined

  useLayoutEffect(() => {
    if (!member) {
      setMemberSize({ width: 0, height: 0 })
      return
    }

    const card = cardRef.current
    const memberEl = memberRef.current
    if (!card || !memberEl) return

    const update = () => {
      const cardStyles = getComputedStyle(card)
      const paddingX =
        parseFloat(cardStyles.paddingLeft) + parseFloat(cardStyles.paddingRight)
      const paddingY =
        parseFloat(cardStyles.paddingTop) + parseFloat(cardStyles.paddingBottom)
      const logoEl = card.querySelector<HTMLElement>('.band-card-logo')
      const logoStyles = logoEl ? getComputedStyle(logoEl) : null
      const logoBlock =
        (logoEl?.offsetHeight ?? 0) +
        (logoStyles
          ? parseFloat(logoStyles.marginTop) + parseFloat(logoStyles.marginBottom)
          : 0)
      const width = card.clientWidth - paddingX
      const height = card.clientHeight - paddingY - logoBlock

      setMemberSize(fitMemberAspectBox(width, height))
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(card)
    return () => observer.disconnect()
  }, [member, selectedMember])

  return (
    <>
      <button
        type="button"
        className={`band-card${member ? ' band-card--selected' : ''}`}
        ref={cardRef}
        onClick={() => setDropdownOpen(true)}
      >
        <div className="band-card-logo">
          <img
            src={group.logoImage}
            alt={group.name}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling?.classList.add('visible')
            }}
          />
          <span className="band-card-logo-fallback">{group.name}</span>
        </div>
        {member && (
          <div className="band-card-member" ref={memberRef}>
            {memberSize.width > 0 && memberSize.height > 0 ? (
              <MemberImage
                src={member.image}
                alt={member.name}
                width={memberSize.width}
                height={memberSize.height}
              />
            ) : null}
          </div>
        )}
      </button>
      {dropdownOpen && (
        <MemberDropdown
          members={group.members}
          selected={selected}
          mode="single"
          onChange={onChange}
          onClose={() => setDropdownOpen(false)}
          anchorRect={cardRef.current?.getBoundingClientRect()}
        />
      )}
    </>
  )
}
