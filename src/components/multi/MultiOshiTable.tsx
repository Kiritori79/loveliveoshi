import { groups } from '../../data/groups'
import type { SelectionState } from '../../types'
import { MultiOshiRow } from './MultiOshiRow'

interface MultiOshiTableProps {
  selections: SelectionState
  onSelectionChange: (groupId: string, selected: string[]) => void
}

export function MultiOshiTable({
  selections,
  onSelectionChange,
}: MultiOshiTableProps) {
  return (
    <div className="multi-oshi-table">
      {groups.map((group) => (
        <MultiOshiRow
          key={group.id}
          group={group}
          selected={selections[group.id] ?? []}
          onChange={(selected) => onSelectionChange(group.id, selected)}
        />
      ))}
    </div>
  )
}
