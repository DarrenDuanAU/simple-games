export const MAX_I = 15
export const MAX_J = 10

export const SQUARES_DATA = [];
for( let i=0; i< MAX_I; i++){
  for( let j=0; j< MAX_J; j++){
    SQUARES_DATA.push({coor:`${i}-${j}`, active:false});
  }
}

export const START_BLOCK_COOR = [
  ['0-4'],
  ['0-4','1-4'],
  ['0-4','0-5','1-4','1-5'],
]

