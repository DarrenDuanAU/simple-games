export const MAX_Y = 15
export const MAX_X = 10

export const CHIP_THEME = {
  0: {color: 'blue'},
  1: {color: 'grey'}
}


export const SQUARES_DATA = new Array(MAX_Y).fill(new Array(MAX_X).fill(0))

export const START_BLOCK_COOR = [
  [[4,MAX_Y-1]],
  [[4,MAX_Y-1],[4,MAX_Y-2]]
]

