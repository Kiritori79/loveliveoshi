export type AppPage = 'home' | 'single' | 'multi'

export type OshiMode = 'single' | 'multi'

export interface SelectionState {
  [groupId: string]: string[]
}
