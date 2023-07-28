import './style.css'
import { useEffect, useRef, useState } from 'react'
import Square from './components/Square'
import Button from '../Button'
import { SQUARES_DATA, START_BLOCK_COOR, MAX_I } from './constants'
import { blockHandler, getNeighbor, toNumberCoors, fondActiveRow, deactivateRows } from './functions'
const Tetris = ({
  intervalIds
}) =>{
  const [squares, setSquares] = useState(SQUARES_DATA);
  const [block, setBlock] = useState([])
  const [bottom, setBottom] = useState(false);
  const [gameStarted, setGameStarted] =useState(false);
  const [deactivating, setDeactivating] = useState(false)
  const preBlock = useRef(['',''])

/***************************************************************
                          Hooks
***************************************************************/

  //clean up all intervals
  useEffect(() => {
    intervalIds.current.forEach((intervalId) => {
     clearInterval(intervalId)
    })
  },[intervalIds])

  // save the prevState of block
  useEffect(() => {
    preBlock.current.shift()
    preBlock.current.push(block)
  },[block])

  // add keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); 

  useEffect(() => {
    if(deactivating){
      setSquares( prevSquares => {
        const tempSquares = [...prevSquares]
        const activeRows = fondActiveRow(tempSquares)
        console.log('input')
        console.log(tempSquares)
        return deactivateRows(activeRows,tempSquares)
      })
      setDeactivating(false)
    }
  },[deactivating])

  // every time the block reach the bottom generate a new block
  useEffect(() => {
    if(bottom === true){
      const numberCoors = toNumberCoors(preBlock.current[0])
      if (numberCoors[0][0] <2) {
        alert('game over!')
        intervalIds.current.forEach((intervalId) => {
          clearInterval(intervalId)
        })
      } else {
        console.log('reachedBottom')
        preBlock.current.shift()
        preBlock.current.push('')
        const BlockCoor = START_BLOCK_COOR[Math.floor(Math.random()*3)]

        setDeactivating(true)
        setBottom(false)
        setBlock(BlockCoor)
      }
    }
  },[bottom,intervalIds,squares])

  // update the squares when block changed
  useEffect(() => {
    setSquares( (prevSquares) =>{
      const removeBlock = preBlock.current[0]

      const tempSquares = [...prevSquares]
      const result = tempSquares.map((square) => {
        if (block.includes(square.coor) ) {
          return {...square, active: true}
        } 
        if (removeBlock.includes(square.coor) ) {
          return {...square, active: false}
        }
        else {
          return square;
        }
      })
      return result
    })
    
  },[block])

  //check the whether the block reach bottom when everytime block move
  useEffect(()=> { 
    block.forEach((coor) => {
      const numberCoor = coor.split('-').map((string) => Number(string))
      if(numberCoor[0] === MAX_I - 1) {
        setBottom(true)
        return
      } 
    })
    let blockBottom;
    // blockBottom = getNeighbor(block,'down')
    if (block.length === 1) {
      blockBottom = block; 
    } else {
      blockBottom = block.slice(block.length/2)
    }
    blockBottom.forEach((coor) => {
      const numberCoor = coor.split('-').map((string) => Number(string))
      if ( squareActive( (numberCoor[0] + 1)+ '-' +numberCoor[1] ) ) {
        setBottom(true)
      }
    })

  },[block])

/***************************************************************
                          Functions
***************************************************************/
 
 
const handleKeyPress = (event) => {
  console.log(`key was pressed! ${event.key}`);
  if (event.key === 'ArrowDown'){
    moveBlock('down')
  } else if (event.key === 'ArrowLeft'){
    moveBlock('left')
  } else if (event.key === 'ArrowRight'){
    moveBlock('right')
  }
};

  const squareActive = (coor) => {
    let active = false
    squares.forEach((square) => {
      if (coor === square.coor) {
        active = square.active
      }
    })
    return active
  }

  const startGame = () => {
    setGameStarted(true)
    const BlockCoor = START_BLOCK_COOR[Math.floor(Math.random()*3)]
    setBlock(BlockCoor)
    const interval = setInterval(() => {
      console.log('moving down!');
      setBlock( prevBlock => {
        const temp = [...prevBlock]
        return blockHandler(temp,'down')
      } )
    }, 1000);
    intervalIds.current.push(interval)
    // return () => clearInterval(interval);
  }

  const reStartGame = () => {
    intervalIds.current.forEach((intervalId) => {
      clearInterval(intervalId)
     })
     setSquares(SQUARES_DATA)
     preBlock.current = ['','']
     startGame()
  }

  const moveBlock = (direct) => {

    setBlock( prevBlock =>{
      let valid = true
      if (direct !=='down') {
        const neighbor = getNeighbor(prevBlock,direct)
        neighbor.forEach((coor) => {
          if (squareActive(coor)) {
            valid = false
          }
        })
        if (! valid) {
          return prevBlock
        }
      }
      return blockHandler(prevBlock,direct)
    })
    
  }

  return (
    <div>
      <div className="main_container Tetris_main_container">
        {squares.map((item) => (<Square key={item.coor} active={item.active} coor={item.coor} />)) 
        }
      </div>
      <div className='low_container'>
        {gameStarted 
        ? <Button onClick={reStartGame}>Restart</Button>
        : <Button onClick={startGame}>Start</Button>}
        <Button onClick={() => moveBlock('left')} >L</Button>
        <Button onClick={() => moveBlock('down')} >D</Button>
        <Button onClick={() => moveBlock('right')} >R</Button> 
        {/* <Button onClick={() => getNeighbor(['1-2','2-2','1-3','2-3'],'down')}>test</Button> */}
      </div>
    </div>

  )
} 
export default Tetris;