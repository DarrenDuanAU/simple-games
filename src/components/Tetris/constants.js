export const SQUARES_DATA = [];
for( let i=0; i< 15; i++){
  for( let j=0; j< 10; j++){
    SQUARES_DATA.push({coor:`${i}-${j}`, active:false});
  }
}

export const START_COOR = '0-4'