export const MAX_Y = 15
export const MAX_X = 10

export const DIRECTION_LIST = ['right','down','left']

export const DEF_CHIP_THEME_CODE = 0
export const CHIP_THEME = {
  0: {color: 'blue'},
  1: {color: 'grey'}
}

export const INIT_DATA = new Array(MAX_Y).fill(new Array(MAX_X).fill(0))

export const START_BLOCK_COOR = [
  [[4,MAX_Y-1]],
  [[4,MAX_Y-1],[4,MAX_Y-2]],
  [[4,MAX_Y-1],[4,MAX_Y-2],[5,MAX_Y-1],[5,MAX_Y-2]]
]

