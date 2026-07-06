export interface Member {
  name: string
  image: string
}

export interface Group {
  id: string
  name: string
  logoImage: string
  members: Member[]
}

function member(groupId: string, name: string): Member {
  return { name, image: `/members/${groupId}/${name}.png` }
}

export const groups: Group[] = [
  {
    id: 'muse',
    name: "μ's",
    logoImage: '/logos/muse.png',
    members: [
      member('muse', '高坂穗乃果'),
      member('muse', '绚濑绘里'),
      member('muse', '南小鸟'),
      member('muse', '园田海未'),
      member('muse', '星空凛'),
      member('muse', '西木野真姬'),
      member('muse', '东条希'),
      member('muse', '小泉花阳'),
      member('muse', '矢泽妮可'),
    ],
  },
  {
    id: 'aqours',
    name: 'Aqours',
    logoImage: '/logos/aqours.png',
    members: [
      member('aqours', '高海千歌'),
      member('aqours', '樱内梨子'),
      member('aqours', '松浦果南'),
      member('aqours', '黑泽黛雅'),
      member('aqours', '渡边曜'),
      member('aqours', '津岛善子'),
      member('aqours', '国木田花丸'),
      member('aqours', '小原鞠莉'),
      member('aqours', '黑泽露比'),
    ],
  },
  {
    id: 'nijigasaki',
    name: '虹咲学园学园偶像同好会',
    logoImage: '/logos/nijigasaki.png',
    members: [
      member('nijigasaki', '上原步梦'),
      member('nijigasaki', '中须霞'),
      member('nijigasaki', '樱坂雫'),
      member('nijigasaki', '朝香果林'),
      member('nijigasaki', '宫下爱'),
      member('nijigasaki', '近江彼方'),
      member('nijigasaki', '优木雪菜'),
      member('nijigasaki', '艾玛·维尔德'),
      member('nijigasaki', '天王寺璃奈'),
      member('nijigasaki', '三船栞子'),
      member('nijigasaki', '米娅·泰勒'),
      member('nijigasaki', '钟岚珠'),
      member('nijigasaki', '高咲侑'),
    ],
  },
  {
    id: 'liella',
    name: 'Liella!',
    logoImage: '/logos/liella.png',
    members: [
      member('liella', '涩谷香音'),
      member('liella', '唐可可'),
      member('liella', '岚千砂都'),
      member('liella', '平安名堇'),
      member('liella', '叶月恋'),
      member('liella', '樱小路希奈子'),
      member('liella', '米女芽衣'),
      member('liella', '若菜四季'),
      member('liella', '鬼冢夏美'),
      member('liella', '维恩·玛格丽特'),
      member('liella', '鬼冢冬毬'),
    ],
  },
  {
    id: 'hasunosora',
    name: '莲之空女学院学园偶像俱乐部',
    logoImage: '/logos/hasunosora.png',
    members: [
      member('hasunosora', '日野下花帆'),
      member('hasunosora', '村野沙耶香'),
      member('hasunosora', '乙宗梢'),
      member('hasunosora', '夕雾缀理'),
      member('hasunosora', '大泽瑠璃乃'),
      member('hasunosora', '藤岛慈'),
      member('hasunosora', '百生吟子'),
      member('hasunosora', '徒町小铃'),
      member('hasunosora', '安养寺姬芽'),
      member('hasunosora', '塞拉斯'),
      member('hasunosora', '桂城泉'),
    ],
  },
  {
    id: 'bluebird',
    name: 'BLUEBIRD',
    logoImage: '/logos/bluebird.png',
    members: [
      member('bluebird', '高桥波尔卡'),
      member('bluebird', '麻布麻衣'),
      member('bluebird', '五桐玲'),
      member('bluebird', '驹形花火'),
      member('bluebird', '金泽奇迹'),
      member('bluebird', '调布乃理子'),
      member('bluebird', '春宫悠可里'),
      member('bluebird', '此花辉夜'),
      member('bluebird', '山田真绿'),
      member('bluebird', '佐佐木翔音'),
    ],
  },
]

export function getMemberByName(groupId: string, name: string): Member | undefined {
  const group = groups.find((g) => g.id === groupId)
  return group?.members.find((m) => m.name === name)
}
