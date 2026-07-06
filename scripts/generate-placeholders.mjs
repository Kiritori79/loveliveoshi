import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import zlib from 'zlib'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length, 0)
  const typeBuf = Buffer.from(type)
  const crcBuf = Buffer.alloc(4)
  let c = 0xffffffff
  const crcData = Buffer.concat([typeBuf, data])
  for (let i = 0; i < crcData.length; i++) {
    c ^= crcData[i]
    for (let j = 0; j < 8; j++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    }
  }
  crcBuf.writeUInt32BE((c ^ 0xffffffff) >>> 0, 0)
  return Buffer.concat([len, typeBuf, data, crcBuf])
}

function makePng(width, height, r, g, b) {
  const rowSize = width * 3 + 1
  const raw = Buffer.alloc(rowSize * height)
  for (let y = 0; y < height; y++) {
    const rowStart = y * rowSize
    raw[rowStart] = 0
    for (let x = 0; x < width; x++) {
      const i = rowStart + 1 + x * 3
      const t = y / height
      raw[i] = Math.min(255, Math.round(r + 40 * t))
      raw[i + 1] = Math.min(255, Math.round(g + 30 * t))
      raw[i + 2] = Math.min(255, Math.round(b + 20 * t))
    }
  }

  const compressed = zlib.deflateSync(raw, { level: 9 })
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8
  ihdr[9] = 2
  ihdr[10] = 0
  ihdr[11] = 0
  ihdr[12] = 0

  return Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

function writePng(path, width, height, r, g, b) {
  const dir = dirname(path)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  writeFileSync(path, makePng(width, height, r, g, b))
}

const memberData = {
  muse: ['高坂穗乃果', '绚濑绘里', '南小鸟', '园田海未', '星空凛', '西木野真姬', '东条希', '小泉花阳', '矢泽妮可'],
  aqours: ['高海千歌', '樱内梨子', '松浦果南', '黑泽黛雅', '渡边曜', '津岛善子', '国木田花丸', '小原鞠莉', '黑泽露比'],
  nijigasaki: ['上原步梦', '中须霞', '樱坂雫', '朝香果林', '宫下爱', '近江彼方', '优木雪菜', '艾玛·维尔德', '天王寺璃奈', '三船栞子', '米娅·泰勒', '钟岚珠', '高咲侑'],
  liella: ['涩谷香音', '唐可可', '岚千砂都', '平安名堇', '叶月恋', '樱小路希奈子', '米女芽衣', '若菜四季', '鬼冢夏美', '维恩·玛格丽特', '鬼冢冬毬'],
  hasunosora: ['日野下花帆', '村野沙耶香', '乙宗梢', '夕雾缀理', '大泽瑠璃乃', '藤岛慈', '百生吟子', '徒町小铃', '安养寺姬芽', '塞拉斯', '桂城泉'],
  bluebird: ['高桥波尔卡', '麻布麻衣', '五桐玲', '驹形花火', '金泽奇迹', '调布乃理子', '春宫悠可里', '此花辉夜', '山田真绿', '佐佐木翔音'],
}

writePng(join(publicDir, 'assets', 'title.png'), 360, 80, 255, 143, 171)

const logoIds = ['muse', 'aqours', 'nijigasaki', 'liella', 'hasunosora', 'bluebird']
for (const id of logoIds) {
  writePng(join(publicDir, 'logos', `${id}.png`), 120, 40, 255, 200, 216)
}

for (const [groupId, members] of Object.entries(memberData)) {
  for (const name of members) {
    writePng(join(publicDir, 'members', groupId, `${name}.png`), 300, 400, 255, 180, 200)
  }
}

console.log('Placeholder images generated.')
