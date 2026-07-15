export interface Character {
  id: string
  name: string
  groupId: string
  image: string
}

function character(groupId: string, name: string): Character {
  return {
    id: `char:${groupId}:${name}`,
    name,
    groupId,
    image: `/members/${groupId}/${name}.png`,
  }
}

export const characters: Character[] = [
  // μ's
  character('muse', '高坂穗乃果'),
  character('muse', '绚濑绘里'),
  character('muse', '南小鸟'),
  character('muse', '园田海未'),
  character('muse', '星空凛'),
  character('muse', '西木野真姬'),
  character('muse', '东条希'),
  character('muse', '小泉花阳'),
  character('muse', '矢泽妮可'),

  // Aqours
  character('aqours', '高海千歌'),
  character('aqours', '樱内梨子'),
  character('aqours', '松浦果南'),
  character('aqours', '黑泽黛雅'),
  character('aqours', '渡边曜'),
  character('aqours', '津岛善子'),
  character('aqours', '国木田花丸'),
  character('aqours', '小原鞠莉'),
  character('aqours', '黑泽露比'),

  // 虹咲
  character('nijigasaki', '上原步梦'),
  character('nijigasaki', '中须霞'),
  character('nijigasaki', '樱坂雫'),
  character('nijigasaki', '朝香果林'),
  character('nijigasaki', '宫下爱'),
  character('nijigasaki', '近江彼方'),
  character('nijigasaki', '优木雪菜'),
  character('nijigasaki', '艾玛·维尔德'),
  character('nijigasaki', '天王寺璃奈'),
  character('nijigasaki', '三船栞子'),
  character('nijigasaki', '米娅·泰勒'),
  character('nijigasaki', '钟岚珠'),
  character('nijigasaki', '高咲侑'),

  // Liella!
  character('liella', '涩谷香音'),
  character('liella', '唐可可'),
  character('liella', '岚千砂都'),
  character('liella', '平安名堇'),
  character('liella', '叶月恋'),
  character('liella', '樱小路希奈子'),
  character('liella', '米女芽衣'),
  character('liella', '若菜四季'),
  character('liella', '鬼冢夏美'),
  character('liella', '维恩·玛格丽特'),
  character('liella', '鬼冢冬毬'),

  // 莲之空
  character('hasunosora', '日野下花帆'),
  character('hasunosora', '村野沙耶香'),
  character('hasunosora', '乙宗梢'),
  character('hasunosora', '夕雾缀理'),
  character('hasunosora', '大泽瑠璃乃'),
  character('hasunosora', '藤岛慈'),
  character('hasunosora', '百生吟子'),
  character('hasunosora', '徒町小铃'),
  character('hasunosora', '安养寺姬芽'),
  character('hasunosora', '塞拉斯'),
  character('hasunosora', '桂城泉'),

  // BLUEBIRD
  character('bluebird', '高桥波尔卡'),
  character('bluebird', '麻布麻衣'),
  character('bluebird', '五桐玲'),
  character('bluebird', '驹形花火'),
  character('bluebird', '金泽奇迹'),
  character('bluebird', '调布乃理子'),
  character('bluebird', '春宫悠可里'),
  character('bluebird', '此花辉夜'),
  character('bluebird', '山田真绿'),
  character('bluebird', '佐佐木翔音'),
]

export function getCharacterById(id: string): Character | undefined {
  return characters.find((c) => c.id === id)
}

export function getCharactersByGroup(groupId: string): Character[] {
  return characters.filter((c) => c.groupId === groupId)
}
