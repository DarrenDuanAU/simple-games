import './style/style.css'
import { useEffect, useState, useRef } from 'react'
import SquareLayer from './components/SquareLayer'
import BlockLayer from './components/BlockLayer'

import Button from '../Button'
import { INIT_DATA, 
  DEF_CHIP_THEME_CODE, 
  START_BLOCK_COOR, 
  MAX_X} from './constants'
import { randomPick, 
  getColoredCoorTheme, 
  BlockHandler,
  reeachedBoundaryOn } from './functions'

const Tetris = ({
  setScore,
  intervalIds
}) =>{
  const [gameStart, setGameStart] = useState(false)
  const [status, setStatus] = useState('notStart')
  const [squares, setSquares] = useState(INIT_DATA)
  const [blocks, setBlocks] = useState(INIT_DATA)
  const prevBlocksRef = useRef(blocks)
  const prevSquaresRef = useRef(squares)
  const [tetrisScore, setTetrisScore] = useState(0)

  // useEffect(()=>{
  //   document.addEventListener('keydown', (event) =>{
  //     const direction = event.key.slice(5).toLowerCase()
  //     console.log(direction);
  //     moveBlock(direction)
  //   })
  // },[])

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
        // console.log('start!')
        const intervalId = setInterval(() => {
          setBlocks((prevState) => {
            const prevBlocks = [...prevState];
            return BlockHandler(prevBlocks,'down')
          });
        }, 1000);
        intervalIds.current.push(intervalId)
        break
      case 'collision':
        // console.log('collision')
        intervalIds.current.forEach(intervalId => clearInterval(intervalId))
        const coloredCoors = getColoredCoorTheme([...prevBlocksRef.current])
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
        setStatus('removeRows')
        break

      case 'removeRows':
        // console.log('removeRows')  
        const currentSquare = [...prevSquaresRef.current]
        const coloredRowIndexList = []
        currentSquare.forEach((row, y) => {
          let counter = 0
          row.forEach((colorCode) => {
            if (colorCode !== DEF_CHIP_THEME_CODE) {
              counter += 1
            }
          })
          if ( counter === MAX_X) {
            coloredRowIndexList.push(y)
          }
        })
        const coloredRowIndexListReverse = coloredRowIndexList.reverse()
        const winScore = coloredRowIndexListReverse.length
        setScore(s => s + winScore)
        setTetrisScore(s => s + winScore)
        // console.log('row to remove',coloredRowIndexListReverse)
        if (coloredRowIndexListReverse.length !== 0) {
          setSquares(prevSquares => {
            const temp = [...prevSquares]
            coloredRowIndexListReverse.forEach((rowIndex) => {
              temp.splice(rowIndex,1)
              const defColorArray = new Array(MAX_X).fill(DEF_CHIP_THEME_CODE);
              temp.push(defColorArray)
            })
            return temp
          })
        }
        setStatus('newBlock')
        break

      default:
        console.log('invalid game status')
    }

  }, [status,setScore,intervalIds]);

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
    if (blocks !== INIT_DATA) {

      let hasCollision = false;
      const nextBlock = BlockHandler([...blocks], 'down')
      const blockColoredDict = getColoredCoorTheme(nextBlock)
  
      const currentSquare = [...prevSquaresRef.current]
      currentSquare.forEach((row, y) => {
        row.forEach((colorCode, x) => {
          if ( x in blockColoredDict 
            && y in blockColoredDict[x] 
            && blockColoredDict[x][y] !== DEF_CHIP_THEME_CODE 
            && colorCode !== DEF_CHIP_THEME_CODE ){
              
            hasCollision = true
          }
        })
      })
  
      if (hasCollision) {
        setStatus('collision')
        return
      }
    }
   
  },[blocks])




  const startGame = () => {
    setStatus('newBlock')
    setGameStart(true)
  }

  const moveBlock = (direction) => {

    let reeachedBoundary = false
    let willCollision = false

    if (reeachedBoundaryOn([...blocks]) === direction) {
      reeachedBoundary = true
    } 

    if (!reeachedBoundary) {
      const nextBlock = BlockHandler([...blocks],direction)
      const blockColoredDict = getColoredCoorTheme(nextBlock)
      const currentSquare = [...squares]
      currentSquare.forEach((row, y) => {
        row.forEach((colorCode, x) => {
          if ( x in blockColoredDict 
            && y in blockColoredDict[x] 
            && blockColoredDict[x][y] !== DEF_CHIP_THEME_CODE 
            && colorCode !== DEF_CHIP_THEME_CODE ){
              
            willCollision = true
          }
        })
      })
    }

    if (!reeachedBoundary && !willCollision) {
      setBlocks((prevState) => {
        const prevBlocks = [...prevState];
        const updatedBlocks = BlockHandler(prevBlocks, direction);
        return updatedBlocks;
      });
    }
  }

  return (
    <div className='container'>
      <div className='Teris_score_board' >Tetris score: {tetrisScore}</div>
      <div className='Tetris_upper_container'>
        <SquareLayer squares={squares}/>
        <div className='above_Tetris_upper_container'>
          <BlockLayer blocks={blocks}/>
        </div>
      </div>
      <div className='lower_container'>
        {gameStart
          ? (<>
            <Button onClick={() => moveBlock('left')}>L</Button>
            <Button onClick={() => moveBlock('down')}>D</Button>
            <Button onClick={() => moveBlock('right')}>R</Button>
          </>)
          : <Button onClick={startGame}>start</Button>
        }
      </div>
    </div>
    
    
  )
}
export default Tetris;