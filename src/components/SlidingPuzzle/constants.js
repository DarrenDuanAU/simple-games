import { chip0, chip1, chip2, chip3, chip4, chip5, 
  chip6, chip7, chip8} from '../../data/shrek'

export const OriginImageIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];


export const SHREK_PIECES = [
  chip0, chip1, chip2, chip3, chip4,chip5, 
  chip6, chip7, chip8
]

export const PUZZLE_CLICK_MAP = [
  { click: 0, check: [1, 3] },
  { click: 1, check: [0, 2, 4] },
  { click: 2, check: [1, 5] },
  { click: 3, check: [0, 4, 6] },
  { click: 4, check: [1, 3, 5, 7] },
  { click: 5, check: [2, 4, 8] },
  { click: 6, check: [3, 7] },
  { click: 7, check: [4, 6, 8] },
  { click: 8, check: [5, 7] }
]