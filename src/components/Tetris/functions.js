import { DEF_CHIP_THEME_CODE ,MAX_X, MAX_Y } from "./constants";

export const randomPick = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

export const getColoredCoorTheme = (data) => {
  const coorColor = {}
  data.forEach((row, y) => {
    row.forEach((colorCode, x) => {
      if (colorCode !== DEF_CHIP_THEME_CODE) {
        if (x in coorColor) {
          coorColor[x][y] = colorCode
        } else {
          coorColor[x] = {}
          coorColor[x][y] = colorCode
        }
      }
    })
  })
  return coorColor
}

// const bottomY = (codes) => {
//   const smallest_y = codes.findIndex((row) => {
//     return (row.every((colorCode) => colorCode === 0) === false)
//   })
//   return smallest_y
// }

export const getColoredCoors = (data) => {
  let coloredCoors = []
  data.forEach((row,y) => {
    row.forEach((colorCode,x) => {
      if (colorCode !== DEF_CHIP_THEME_CODE){
        coloredCoors.push([x,y])
      }
    })
  })
  return coloredCoors
}

// const inContainer = (coors) => {
//   let result = true
//   let rangeX = [0, MAX_X -1]
//   let rangeY = [0, MAX_Y-1]
//   coors.find(([x,y]) => {
//     if(x < rangeX[0] || x > rangeX[1] || 
//       y < rangeY[0] || y > rangeY[1]){
//       result = false
//       return true
//     }
//   })
//   return result
// }

// export const findNeighbour = (coors,direction) => {
//   switch(direction){
//     case 'down':
      
//   }
// }


export const BlockHandler = (data, direction) => {
  switch(direction){
    case 'down':
      data.shift();
      const defColorArray = new Array(MAX_X).fill(DEF_CHIP_THEME_CODE);
      data.push(defColorArray);
      return data
    case 'left':
      return data.map((row)=>{
        row=row.slice(1)
        row.push(DEF_CHIP_THEME_CODE)
        return row
      })
    case 'right':
      return data.map((row)=>{
        row=row.slice(0,row.length-1)
        row.unshift(DEF_CHIP_THEME_CODE)
        return row
      })
    default:
      console.log('function BlockHandler: invalid direction')
  }
}
