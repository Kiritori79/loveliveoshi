const MIN_WIDTH = 18
const MIN_HEIGHT = 24
const MAX_WIDTH = 36
const MAX_HEIGHT = 48
const GAP = 4
export const MEMBER_ASPECT = 3 / 4

export interface ThumbSize {
  width: number
  height: number
}

/** 在可用区域内放入最大 3:4 竖图框 */
export function fitMemberAspectBox(
  availableWidth: number,
  availableHeight: number,
): ThumbSize {
  if (availableWidth <= 0 || availableHeight <= 0) {
    return { width: 0, height: 0 }
  }

  let width = availableWidth
  let height = Math.round(width / MEMBER_ASPECT)

  if (height > availableHeight) {
    height = availableHeight
    width = Math.round(height * MEMBER_ASPECT)
  }

  return { width: Math.max(0, width), height: Math.max(0, height) }
}

export function computeThumbSize(
  containerWidth: number,
  count: number,
): ThumbSize {
  if (count <= 0 || containerWidth <= 0) {
    return { width: MAX_WIDTH, height: MAX_HEIGHT }
  }

  const maxW = Math.floor((containerWidth - (count - 1) * GAP) / count)
  let width = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, maxW))
  let height = Math.round(width / MEMBER_ASPECT)

  if (height > MAX_HEIGHT) {
    height = MAX_HEIGHT
    width = Math.round(height * MEMBER_ASPECT)
  } else if (height < MIN_HEIGHT) {
    height = MIN_HEIGHT
    width = Math.round(height * MEMBER_ASPECT)
  }

  width = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, width))
  height = Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, height))

  return { width, height }
}
