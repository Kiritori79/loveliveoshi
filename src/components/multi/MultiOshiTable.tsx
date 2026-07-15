import { getSelectableGroups } from '../../data/selectable'
import type { SelectionState, TargetType } from '../../types'
import { MultiOshiRow } from './MultiOshiRow'

interface MultiOshiTableProps {
  target: TargetType
  selections: SelectionState
  onSelectionChange: (groupId: string, selected: string[]) => void
}

export function MultiOshiTable({
  target,
  selections,
  onSelectionChange,
}: MultiOshiTableProps) {
  const groups = getSelectableGroups(target)

  return (
    <div className="multi-oshi-table">
      {groups.map((group) => (
        <MultiOshiRow
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
