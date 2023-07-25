import {MAX_I, MAX_J} from './constants'

export const blockHandler = (coors, direct) => {
  let valid = true
  const result = coors.map((coor) => {
    const numberCoor = coor.split('-').map((string) => Number(string))
    if ( direct ==='down' && numberCoor[0] < MAX_I - 1){
      return (numberCoor[0] + 1)+ '-' +numberCoor[1]

    } else if ( direct==='left' &&  numberCoor[1] > 0 ){
      return numberCoor[0]+ '-' +(numberCoor[1] - 1)

    } else if ( direct === 'right' && numberCoor[1] <MAX_J - 1){
      return numberCoor[0]+ '-' +(numberCoor[1] + 1)

    } else {
      valid = false
      return coor
    }
  })
  if (! valid) {
    return coors
  }
  return result
}


export const reachedBottom = (coors) => {
  let found = false
  coors.forEach((coor) => {
    const numberCoor = coor.split('-').map((string) => Number(string))
    if(numberCoor[0] === MAX_I - 1) {
      found = true
    }
  })
  return found
}

