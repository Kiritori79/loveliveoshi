import { getSelectableGroups } from '../data/selectable'
import type { SelectionState, TargetType } from '../types'
import { BandCard } from './BandCard'

interface BandGridProps {
  target: TargetType
  selections: SelectionState
  onSelectionChange: (groupId: string, selected: string[]) => void
}

export function BandGrid({
  target,
  selections,
  onSelectionChange,
}: BandGridProps) {
  const groups = getSelectableGroups(target)

  return (
    <div className="band-grid">
      {groups.map((group) => (
        <BandCard
          key={group.id}
          group={group}
          target={target}
          selected={selections[group.id] ?? []}
          onChange={(selected) => onSelectionChange(group.id, selected)}
        />
      ))}
    </div>
  )
}
