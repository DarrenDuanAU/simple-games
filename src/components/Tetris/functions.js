import { MAX_I, MAX_J } from "./constants"
// import {squareActive} from './Tetris'

export const toNumberCoors = (coors) => {
  return coors.map((coor) => (coor.split('-').map((string) => Number(string))))
}

export const toNumberCoor = (coor) => {
  return coor.split('-').map((string) =>Number(string))
}

export const toStringCoor = (numberCoor) => {
  return (numberCoor[0] + '-' + numberCoor[1])
}


export const blockHandler = (coors, direct) => {
  let valid = true
  const result = coors.map((coor) => {
    const numberCoor = coor.split('-').map((string) => Number(string))
    if ( direct ==='down' && numberCoor[0] < MAX_I - 1){
      return (numberCoor[0] + 1) + '-' + numberCoor[1]

    } else if ( direct==='left' &&  numberCoor[1] > 0){
      return numberCoor[0] + '-' + (numberCoor[1] - 1)

    } else if ( direct === 'right' && numberCoor[1] <MAX_J - 1){
      return numberCoor[0] + '-' + (numberCoor[1] + 1)

    } else {
      valid = false
      return coor
    }
  })
  if (! valid) {
    console.log('out of range')
    return coors
  }
  return result
}


export const getNeighbor = (coors, direct) => {
  const numberCoors = toNumberCoors(coors)
  if( direct === 'down') {
    let max = Number.NEGATIVE_INFINITY
    numberCoors.forEach((numberCoor) => {
      if (numberCoor[0] > max){
        max = numberCoor[0]
      }
    })
    const temp = numberCoors.filter(numberCoor => numberCoor[0] === max)
    
    const reuslt = temp.map(numberCoor => {
      return (numberCoor[0]+1) + '-' + numberCoor[1]
    })
    console.log(reuslt)
    return reuslt
  }else if( direct === 'right') {
    let max = Number.NEGATIVE_INFINITY
    numberCoors.forEach((numberCoor) => {
      if (numberCoor[1] > max){
        max = numberCoor[1]
      }
    })
    const temp = numberCoors.filter(numberCoor => numberCoor[1] === max)
    
    const reuslt = temp.map(numberCoor => {
      return numberCoor[0] + '-' + (numberCoor[1]+1)
    })
    return reuslt
  } else if ( direct === 'left') {
    let min = MAX_I
    numberCoors.forEach((numberCoor) => {
      if (numberCoor[1] < min){
        min = numberCoor[1]
      }
    })
    const temp = numberCoors.filter(numberCoor => numberCoor[1] === min)
    const reuslt = temp.map(numberCoor => {
      return numberCoor[0] + '-' + (numberCoor[1]-1)
    })
    return reuslt
  }
  
}

export const fondActiveRow = (squares) => {
  let counter = 0
  let row = 0
  const activeRow = []
  squares.forEach((square) => {
    const numberCoor = toNumberCoor(square.coor)
    if ( numberCoor[0] !== row) {
      if ( counter === MAX_J) {
        activeRow.push(row)
      }
      row = numberCoor[0]
      counter = 0
    } 

    if (square.active === true ) {
      counter += 1
    }
  })
  if (counter === MAX_J) {
    activeRow.push(MAX_I-1)
  }
  console.log('the active row is', activeRow)
  return activeRow
}

export const deactivateRows =(removeRowList, squares) => {
  const reverseList = removeRowList.reverse()
  reverseList.forEach((rowIndex) => {
    for( let i= MAX_I - 1 ; i > 0; i--){
      for( let j= 0; j < MAX_J; j++){
        // console.log(i,j)
        if (i <= rowIndex) {
          squares[i*MAX_J + j].active = squares[(i-1)*MAX_J + j].active
        }
      }
    }
  })
  return squares
}