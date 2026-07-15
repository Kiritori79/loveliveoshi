export type AppPage = 'home' | 'mode' | 'target' | 'chart'

export type ChartMode = 'single' | 'multi'

export type TargetType = 'character' | 'voice_actor' | 'character_voice'

/** 各团体已选项 id 列表 */
export interface SelectionState {
  [groupId: string]: string[]
}
