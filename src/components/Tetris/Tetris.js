import './style/style.css'
import { useEffect, useState, useRef } from 'react'
import Square from './components/Square'
import Block from './components/Block'
import Button from '../Button'
import { INIT_DATA, 
  DEF_CHIP_THEME_CODE, 
  START_BLOCK_COOR } from './constants'
import { randomPick, 
  getColoredCoorTheme, 
  BlockHandler,
  getColoredCoors } from './functions'

const Tetris = () =>{
  const [status, setStatus] = useState('notStart')
  const [squares, setSquares] = useState(INIT_DATA)
  const [blocks, setBlocks] = useState(INIT_DATA)
  const prevBlocksRef = useRef(blocks)
  const prevSquaresRef = useRef(squares)
  const intervalIds = useRef([])

  useEffect(()=>{
    document.addEventListener('keydown', (event) =>{
      console.log(`${event.key.slice(5).toLowerCase()}`);
      moveBlock(`${event.key.slice(5).toLowerCase()}`)
    })
  },[])

  useEffect(()=> {
    prevBlocksRef.current=blocks
  },[blocks])

  useEffect(()=> {
    prevSquaresRef.current=squares
  },[squares])

  useEffect(() => {
    switch(status) {
      case 'newBlock':
        const newColorCode = 1;
        const newCoors = randomPick(START_BLOCK_COOR);
        console.log(newCoors)
        setBlocks((prevState) => {
          const prevBlocks = [...prevState];
          return prevBlocks.map((row, index_y) => {
            return row.map((colorCode, index_x) => {
              if (newCoors.some(([x, y]) => x === index_x && y === index_y)) {
                return newColorCode;
              } else {
                return colorCode;
              }
            });
          });
        });
        setStatus('start')
        break
      case 'start':
        console.log('start!')
        const intervalId = setInterval(() => {
          setBlocks((prevState) => {
            const prevBlocks = [...prevState];
            return BlockHandler(prevBlocks,'down')
          });
        }, 1000);
        intervalIds.current.push(intervalId)
        break
      case 'collision':
        intervalIds.current.forEach(intervalId => clearInterval(intervalId))
        const coloredCoors = getColoredCoorTheme(prevBlocksRef.current)
        setBlocks(INIT_DATA)
        setSquares( prevState => {
          const temp = [...prevState]
          return temp.map((row, y) => {
            return row.map((colorCode, x) => {
              if(x in coloredCoors && y in coloredCoors[x]) {
                return coloredCoors[x][y]
              }else {
                return colorCode
              }
            })
          })
        })
        break

      default:
        console.log('invalid game status')



    }

  }, [status]);

  useEffect(()=>{
    // console.log(getColoredCoors(blocks))
    let hasCollision = false;
    blocks.forEach((row,y) => {
        row.forEach((colorCode, x) => {
          if(y === 0 && colorCode !== DEF_CHIP_THEME_CODE ) {
            hasCollision = true
          }
        })
    })
    if (hasCollision) {
      setStatus('collision')
      return
    }

  },[blocks])

  useEffect(()=>{
    let hasCollision = false;
    const coors = getColoredCoors(blocks)
    console.log(coors)
    
    // const coloredCoors = getColoredCoorTheme(blockNextPosition)
    // prevSquaresRef.current.forEach((row, y) => {
    //   row.forEach((colorCode, x) => {
    //     if(x in coloredCoors 
    //       && y in coloredCoors[x] 
    //       && colorCode !== DEF_CHIP_THEME_CODE) {
    //         hasCollision = true
    //     }
    //   })
    // })
    // if (hasCollision) {
    //   setStatus('collision')
    //   return
    // }
  },[blocks])




  const startGame = () => {
    setStatus('newBlock')
  }

  const moveBlock = (direction) => {
    // if(!(direction in DIRECTION_LIST)) {
    //   return
    // }
    setBlocks((prevState) => {
      const prevBlocks = [...prevState];
      const updatedBlocks = BlockHandler(prevBlocks, direction);
      return updatedBlocks;
    });
  }

  return (
    <div className='container'>
      <div className='Tetris_upper_container'>
        {squares.map((row, y)=>(
          row?.map((themeCode, x)=>(
            <Square key={x+'-'+y} themeCode={themeCode} coor={x+'-'+y}></Square>
          ))
        ))}
        <div className='above_Tetris_upper_container'>
          {blocks.map((row, y)=>(
            row.map((themeCode, x)=>(
              <Block key={x+'-'+y} themeCode={themeCode} coor={x+'-'+y}></Block>
            ))
          ))}
        </div>
      </div>
      <div className='lower_container'>
        <Button onClick={startGame}>start</Button>
        <Button onClick={() => moveBlock('left')}>L</Button>
        <Button onClick={() => moveBlock('down')}>D</Button>
        <Button onClick={() => moveBlock('right')}>R</Button>
      </div>
    </div>
    
    
  )
}
export default Tetris;