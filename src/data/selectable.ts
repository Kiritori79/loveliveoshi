import type { TargetType } from '../types'
import { getCharactersByGroup, getCharacterById } from './characters'
import { groups } from './groups'
import { getVoiceActorsByGroup, getVoiceActorById } from './voiceActors'

export interface SelectableItem {
  id: string
  name: string
  image: string
}

export interface SelectableGroup {
  id: string
  name: string
  logoImage: string
  items: SelectableItem[]
}

function toCharacterItem(characterId: string): SelectableItem | undefined {
  const character = getCharacterById(characterId)
  if (!character) return undefined
  return {
    id: character.id,
    name: character.name,
    image: character.image,
  }
}

function toVoiceActorItem(voiceActorId: string): SelectableItem | undefined {
  const voiceActor = getVoiceActorById(voiceActorId)
  if (!voiceActor) return undefined
  return {
    id: voiceActor.id,
    name: voiceActor.name,
    image: voiceActor.image,
  }
}

export function getSelectableGroups(target: TargetType): SelectableGroup[] {
  return groups.map((group) => {
    if (target === 'voice_actor') {
      return {
        ...group,
        items: getVoiceActorsByGroup(group.id).map((va) => ({
          id: va.id,
          name: va.name,
          image: va.image,
        })),
      }
    }

    if (target === 'character_voice') {
      const characters = getCharactersByGroup(group.id).map((c) => ({
        id: c.id,
        name: c.name,
        image: c.image,
      }))
      const voiceActors = getVoiceActorsByGroup(group.id).map((va) => ({
        id: va.id,
        name: va.name,
        image: va.image,
      }))
      return {
        ...group,
        items: [...characters, ...voiceActors],
      }
    }

    return {
      ...group,
      items: getCharactersByGroup(group.id).map((c) => ({
        id: c.id,
        name: c.name,
        image: c.image,
      })),
    }
  })
}

export function getSelectableItem(
  groupId: string,
  itemId: string,
  target: TargetType,
): SelectableItem | undefined {
  if (target === 'character_voice') {
    return getItemById(itemId)
  }

  const group = getSelectableGroups(target).find((g) => g.id === groupId)
  return group?.items.find((item) => item.id === itemId)
}

export function getItemById(itemId: string): SelectableItem | undefined {
  if (itemId.startsWith('char:')) {
    return toCharacterItem(itemId)
  }
  if (itemId.startsWith('va:')) {
    return toVoiceActorItem(itemId)
  }
  return undefined
}

export function getTargetLabels(target: TargetType) {
  switch (target) {
    case 'voice_actor':
      return {
        placeholder: '请选择声优',
        search: '搜索声优...',
        empty: '未找到声优',
        characterSection: '角色',
        voiceActorSection: '声优',
      }
    case 'character_voice':
      return {
        placeholder: '请选择角色或声优',
        search: '搜索角色或声优...',
        empty: '未找到匹配项',
        characterSection: '角色',
        voiceActorSection: '声优',
      }
    default:
      return {
        placeholder: '请选择成员',
        search: '搜索成员...',
        empty: '未找到成员',
        characterSection: '角色',
        voiceActorSection: '声优',
      }
  }
}
