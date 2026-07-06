import { groups } from '../data/groups'
import type { SelectionState } from '../types'
import { BandCard } from './BandCard'

interface BandGridProps {
  selections: SelectionState
  onSelectionChange: (groupId: string, selected: string[]) => void
}

export function BandGrid({ selections, onSelectionChange }: BandGridProps) {
  return (
    <div className="band-grid">
      {groups.map((group) => (
        <BandCard
          key={group.id}
          group={group}
          selected={selections[group.id] ?? []}
          onChange={(selected) => onSelectionChange(group.id, selected)}
        />
      ))}
    </div>
  )
}
