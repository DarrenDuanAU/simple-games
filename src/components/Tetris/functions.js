import { DEF_CHIP_THEME_CODE ,MAX_X } from "./constants";

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

export const reeachedBoundaryOn = (data) => {
  const local_data = [...data]
  let result = 'no'
  local_data.forEach((row, y) => {
    row.forEach((colorCode, x) => {
      if( x === 0 && colorCode !== DEF_CHIP_THEME_CODE) {
        result = 'left'
      }

      if (x === MAX_X - 1 && colorCode !== DEF_CHIP_THEME_CODE ) {
        result = 'right'
      }
    })
  })
  return result
}


export const BlockHandler = (data, direction) => {
  let localData = [...data]
  switch(direction){
    case 'down':
      localData.shift();
      const defColorArray = new Array(MAX_X).fill(DEF_CHIP_THEME_CODE);
      localData.push(defColorArray);
      return localData
    case 'left':
      return localData.map((row)=>{
        let newRow=row.slice(1)
        newRow.push(DEF_CHIP_THEME_CODE)
        return newRow
      })
    case 'right':
      return localData.map((row)=>{
        let newRow=row.slice(0,row.length-1)
        newRow.unshift(DEF_CHIP_THEME_CODE)
        return newRow
      })
    default:
      console.log('function BlockHandler: invalid direction')
  }
}
