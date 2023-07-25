export const MAX_I = 15
export const MAX_J = 10

export const SQUARES_DATA = [];
for( let i=0; i< MAX_I; i++){
  for( let j=0; j< MAX_J; j++){
    SQUARES_DATA.push({coor:`${i}-${j}`, active:false});
  }
}

export const START_BLOCK_COOR = [['0-4'],['0-4','1-4'],['0-4','0-5','1-4','1-5']]

// export const blockHandler = (coors, direct) => {
//   let valid = true
//   const result = coors.map((coor) => {
//     const numberCoor = coor.split('-').map((string) => Number(string))
//     if ( direct ==='down' && numberCoor[0] < MAX_I - 1){
//       return (numberCoor[0] + 1)+ '-' +numberCoor[1]

//     } else if ( direct==='left' &&  numberCoor[1] > 0 ){
//       return numberCoor[0]+ '-' +(numberCoor[1] - 1)

//     } else if ( direct === 'right' && numberCoor[1] <MAX_J - 1){
//       return numberCoor[0]+ '-' +(numberCoor[1] + 1)

//     } else {
//       valid = false
//       return coor
//     }
//   })
//   if (! valid) {
//     return coors
//   }
//   return result
// }


// export const blockPre = (coors) => {
//   const result = coors.map((coor) => {
//     const numberCoor = coor.split('-').map((string) => Number(string))
//     return (numberCoor[0] - 1 )+ '-' +numberCoor[1]
//   })
//   return result
// }

// export const blockMoveDown = (coors) => {
//   let valid = true
//   const result = coors.map((coor) => {
//     const numberCoor = coor.split('-').map((string) => Number(string))
//     if ( numberCoor[0] < MAX_I - 1){
//       return (numberCoor[0] + 1)+ '-' +numberCoor[1]
//     } else {
//       valid = false
//       return coor
//     }
//   })
//   if (! valid) {
//     return coors
//   }
//   return result
// }

// export const blockMoveLeft = (coors) => {
//   let valid = true
//   const result = coors.map((coor) => {
//     const numberCoor = coor.split('-').map((string) => Number(string))
//     if ( numberCoor[1] > 0){
//       return numberCoor[0]+ '-' +(numberCoor[1] - 1)
//     } else {
//       valid =false
//       return coor
//     }
//   })
//   if (! valid) {
//     return coors
//   }
//   return result
// }

// export const blockMoveRight = (coors) => {
//   let valid = true
//   const result = coors.map((coor) => {
//     const numberCoor = coor.split('-').map((string) => Number(string))
//     if ( numberCoor[1] <MAX_J - 1){
//       return numberCoor[0]+ '-' +(numberCoor[1] + 1)
//     }else {
//       valid = false
//       return coor
//     }
//   })
//   if (! valid) {
//     return coors
//   }
//   return result
// }