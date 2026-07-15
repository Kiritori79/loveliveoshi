export interface VoiceActor {
  id: string
  name: string
  image: string
  groupId: string
}

function voiceActor(groupId: string, name: string): VoiceActor {
  return {
    id: `va:${groupId}:${name}`,
    name,
    groupId,
    image: `/voice-actors/${groupId}/${name}.png`,
  }
}

export const voiceActors: VoiceActor[] = [
  // μ's
  voiceActor('muse', '新田惠海'),
  voiceActor('muse', '南条爱乃'),
  voiceActor('muse', '内田彩'),
  voiceActor('muse', '三森铃子'),
  voiceActor('muse', '饭田里穗'),
  voiceActor('muse', 'Pile'),
  voiceActor('muse', '楠田亚衣奈'),
  voiceActor('muse', '久保由利香'),
  voiceActor('muse', '德井青空'),

  // Aqours
  voiceActor('aqours', '伊波杏树'),
  voiceActor('aqours', '逢田梨香子'),
  voiceActor('aqours', '诹访奈奈香'),
  voiceActor('aqours', '小宫有纱'),
  voiceActor('aqours', '齐藤朱夏'),
  voiceActor('aqours', '小林爱香'),
  voiceActor('aqours', '高槻加奈子'),
  voiceActor('aqours', '铃木爱奈'),
  voiceActor('aqours', '降幡爱'),

  // 虹咲
  voiceActor('nijigasaki', '大西亚玖璃'),
  voiceActor('nijigasaki', '相良茉优'),
  voiceActor('nijigasaki', '前田佳织里'),
  voiceActor('nijigasaki', '久保田未梦'),
  voiceActor('nijigasaki', '村上奈津实'),
  voiceActor('nijigasaki', '鬼头明里'),
  voiceActor('nijigasaki', '林鼓子'),
  voiceActor('nijigasaki', '楠木燈'),
  voiceActor('nijigasaki', '指出毬亚'),
  voiceActor('nijigasaki', '田中千惠美'),
  voiceActor('nijigasaki', '小泉萌香'),
  voiceActor('nijigasaki', '内田秀'),
  voiceActor('nijigasaki', '法元明菜'),
  voiceActor('nijigasaki', '矢野妃菜喜'),

  // Liella!
  voiceActor('liella', '伊达小百合'),
  voiceActor('liella', 'Liyuu'),
  voiceActor('liella', '岬奈子'),
  voiceActor('liella', '佩顿尚未'),
  voiceActor('liella', '青山渚'),
  voiceActor('liella', '铃原希实'),
  voiceActor('liella', '薮岛朱音'),
  voiceActor('liella', '大熊和奏'),
  voiceActor('liella', '绘森彩'),
  voiceActor('liella', '结那'),
  voiceActor('liella', '坂仓花'),

  // 莲之空
  voiceActor('hasunosora', '榆井希实'),
  voiceActor('hasunosora', '野中心菜'),
  voiceActor('hasunosora', '花宫初奈'),
  voiceActor('hasunosora', '佐佐木琴子'),
  voiceActor('hasunosora', '菅叶和'),
  voiceActor('hasunosora', '月音瑚奈'),
  voiceActor('hasunosora', '樱井阳菜'),
  voiceActor('hasunosora', '叶山风花'),
  voiceActor('hasunosora', '来栖凛'),
  voiceActor('hasunosora', '三宅美羽'),
  voiceActor('hasunosora', '进藤天音'),

  // BLUEBIRD
  voiceActor('bluebird', '绫咲穗音'),
  voiceActor('bluebird', '远藤璃菜'),
  voiceActor('bluebird', '宫野芹'),
  voiceActor('bluebird', '藤野心'),
  voiceActor('bluebird', '坂野爱羽'),
  voiceActor('bluebird', '濑古梨爱'),
  voiceActor('bluebird', '奥村优季'),
  voiceActor('bluebird', '天泽朱音'),
  voiceActor('bluebird', '小户森穗花'),
  voiceActor('bluebird', '凉之濑葵音'),
]

export function getVoiceActorById(id: string): VoiceActor | undefined {
  return voiceActors.find((v) => v.id === id)
}

export function getVoiceActorsByGroup(groupId: string): VoiceActor[] {
  return voiceActors.filter((v) => v.groupId === groupId)
}
