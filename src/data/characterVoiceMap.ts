export interface CharacterVoiceMap {
  characterId: string
  voiceActorId: string
}

/** 角色与声优一一对应（按团体成员顺序） */
export const characterVoiceMap: CharacterVoiceMap[] = [
  // μ's
  { characterId: 'char:muse:高坂穗乃果', voiceActorId: 'va:muse:新田惠海' },
  { characterId: 'char:muse:绚濑绘里', voiceActorId: 'va:muse:南条爱乃' },
  { characterId: 'char:muse:南小鸟', voiceActorId: 'va:muse:内田彩' },
  { characterId: 'char:muse:园田海未', voiceActorId: 'va:muse:三森铃子' },
  { characterId: 'char:muse:星空凛', voiceActorId: 'va:muse:饭田里穗' },
  { characterId: 'char:muse:西木野真姬', voiceActorId: 'va:muse:Pile' },
  { characterId: 'char:muse:东条希', voiceActorId: 'va:muse:楠田亚衣奈' },
  { characterId: 'char:muse:小泉花阳', voiceActorId: 'va:muse:久保由利香' },
  { characterId: 'char:muse:矢泽妮可', voiceActorId: 'va:muse:德井青空' },

  // Aqours
  { characterId: 'char:aqours:高海千歌', voiceActorId: 'va:aqours:伊波杏树' },
  { characterId: 'char:aqours:樱内梨子', voiceActorId: 'va:aqours:逢田梨香子' },
  { characterId: 'char:aqours:松浦果南', voiceActorId: 'va:aqours:诹访奈奈香' },
  { characterId: 'char:aqours:黑泽黛雅', voiceActorId: 'va:aqours:小宫有纱' },
  { characterId: 'char:aqours:渡边曜', voiceActorId: 'va:aqours:齐藤朱夏' },
  { characterId: 'char:aqours:津岛善子', voiceActorId: 'va:aqours:小林爱香' },
  { characterId: 'char:aqours:国木田花丸', voiceActorId: 'va:aqours:高槻加奈子' },
  { characterId: 'char:aqours:小原鞠莉', voiceActorId: 'va:aqours:铃木爱奈' },
  { characterId: 'char:aqours:黑泽露比', voiceActorId: 'va:aqours:降幡爱' },

  // 虹咲
  { characterId: 'char:nijigasaki:上原步梦', voiceActorId: 'va:nijigasaki:大西亚玖璃' },
  { characterId: 'char:nijigasaki:中须霞', voiceActorId: 'va:nijigasaki:相良茉优' },
  { characterId: 'char:nijigasaki:樱坂雫', voiceActorId: 'va:nijigasaki:前田佳织里' },
  { characterId: 'char:nijigasaki:朝香果林', voiceActorId: 'va:nijigasaki:久保田未梦' },
  { characterId: 'char:nijigasaki:宫下爱', voiceActorId: 'va:nijigasaki:村上奈津实' },
  { characterId: 'char:nijigasaki:近江彼方', voiceActorId: 'va:nijigasaki:鬼头明里' },
  { characterId: 'char:nijigasaki:优木雪菜', voiceActorId: 'va:nijigasaki:林鼓子' },
  { characterId: 'char:nijigasaki:艾玛·维尔德', voiceActorId: 'va:nijigasaki:指出毬亚' },
  { characterId: 'char:nijigasaki:天王寺璃奈', voiceActorId: 'va:nijigasaki:田中千惠美' },
  { characterId: 'char:nijigasaki:三船栞子', voiceActorId: 'va:nijigasaki:小泉萌香' },
  { characterId: 'char:nijigasaki:米娅·泰勒', voiceActorId: 'va:nijigasaki:内田秀' },
  { characterId: 'char:nijigasaki:钟岚珠', voiceActorId: 'va:nijigasaki:法元明菜' },
  { characterId: 'char:nijigasaki:高咲侑', voiceActorId: 'va:nijigasaki:矢野妃菜喜' },

  // Liella!
  { characterId: 'char:liella:涩谷香音', voiceActorId: 'va:liella:伊达小百合' },
  { characterId: 'char:liella:唐可可', voiceActorId: 'va:liella:Liyuu' },
  { characterId: 'char:liella:岚千砂都', voiceActorId: 'va:liella:岬奈子' },
  { characterId: 'char:liella:平安名堇', voiceActorId: 'va:liella:佩顿尚未' },
  { characterId: 'char:liella:叶月恋', voiceActorId: 'va:liella:青山渚' },
  { characterId: 'char:liella:樱小路希奈子', voiceActorId: 'va:liella:铃原希实' },
  { characterId: 'char:liella:米女芽衣', voiceActorId: 'va:liella:薮岛朱音' },
  { characterId: 'char:liella:若菜四季', voiceActorId: 'va:liella:大熊和奏' },
  { characterId: 'char:liella:鬼冢夏美', voiceActorId: 'va:liella:绘森彩' },
  { characterId: 'char:liella:维恩·玛格丽特', voiceActorId: 'va:liella:结那' },
  { characterId: 'char:liella:鬼冢冬毬', voiceActorId: 'va:liella:坂仓花' },

  // 莲之空
  { characterId: 'char:hasunosora:日野下花帆', voiceActorId: 'va:hasunosora:榆井希实' },
  { characterId: 'char:hasunosora:村野沙耶香', voiceActorId: 'va:hasunosora:野中心菜' },
  { characterId: 'char:hasunosora:乙宗梢', voiceActorId: 'va:hasunosora:花宫初奈' },
  { characterId: 'char:hasunosora:夕雾缀理', voiceActorId: 'va:hasunosora:佐佐木琴子' },
  { characterId: 'char:hasunosora:大泽瑠璃乃', voiceActorId: 'va:hasunosora:菅叶和' },
  { characterId: 'char:hasunosora:藤岛慈', voiceActorId: 'va:hasunosora:月音瑚奈' },
  { characterId: 'char:hasunosora:百生吟子', voiceActorId: 'va:hasunosora:樱井阳菜' },
  { characterId: 'char:hasunosora:徒町小铃', voiceActorId: 'va:hasunosora:叶山风花' },
  { characterId: 'char:hasunosora:安养寺姬芽', voiceActorId: 'va:hasunosora:来栖凛' },
  { characterId: 'char:hasunosora:塞拉斯', voiceActorId: 'va:hasunosora:三宅美羽' },
  { characterId: 'char:hasunosora:桂城泉', voiceActorId: 'va:hasunosora:进藤天音' },

  // BLUEBIRD
  { characterId: 'char:bluebird:高桥波尔卡', voiceActorId: 'va:bluebird:绫咲穗音' },
  { characterId: 'char:bluebird:麻布麻衣', voiceActorId: 'va:bluebird:远藤璃菜' },
  { characterId: 'char:bluebird:五桐玲', voiceActorId: 'va:bluebird:宫野芹' },
  { characterId: 'char:bluebird:驹形花火', voiceActorId: 'va:bluebird:藤野心' },
  { characterId: 'char:bluebird:金泽奇迹', voiceActorId: 'va:bluebird:坂野爱羽' },
  { characterId: 'char:bluebird:调布乃理子', voiceActorId: 'va:bluebird:濑古梨爱' },
  { characterId: 'char:bluebird:春宫悠可里', voiceActorId: 'va:bluebird:奥村优季' },
  { characterId: 'char:bluebird:此花辉夜', voiceActorId: 'va:bluebird:天泽朱音' },
  { characterId: 'char:bluebird:山田真绿', voiceActorId: 'va:bluebird:小户森穗花' },
  { characterId: 'char:bluebird:佐佐木翔音', voiceActorId: 'va:bluebird:凉之濑葵音' },
]

export function getVoiceActorIdForCharacter(
  characterId: string,
): string | undefined {
  return characterVoiceMap.find((m) => m.characterId === characterId)
    ?.voiceActorId
}
