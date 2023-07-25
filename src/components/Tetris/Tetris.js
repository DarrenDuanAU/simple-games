import './style.css'
import { useEffect, useRef, useState } from 'react'
import Square from './components/Square'
import Button from '../Button'
import { SQUARES_DATA, START_BLOCK_COOR } from './constants'
import { blockHandler, reachedBottom } from './functions'
const Tetris = () =>{
  const [squares, setSquares] = useState(SQUARES_DATA);
  const [block, setBlock] = useState([])
  const preBlock = useRef(['',''])


  const startTetris = () => {
    alert("game start")
  }

  // record the prevState of block
  useEffect(() => {
    if(reachedBottom(block)){
      console.log('reachedBottom')
    }
    preBlock.current.shift()
    preBlock.current.push(block)
  },[block])

  // update the squares when block changed
  useEffect(() => {
    setSquares( (prevSquares) =>{
      const removeBlock = preBlock.current[0]
      const tempSquares = [...prevSquares]
      const result = tempSquares.map((square) => {
        if (block.includes(square.coor) ) {
          return {...square, active: true}
        } if (removeBlock.includes(square.coor) ) {
          return {...square, active: false}
        } 
        else {
          return square;
        }
      })
      return result
    })
  },[block])


  const generateNewBlock = () => {
    const BlockCoor = START_BLOCK_COOR[Math.floor(Math.random()*3)]
    setBlock(BlockCoor)
    const interval = setInterval(() => {
      // console.log('This will run every second!');
      setBlock( prevBlock => {
        const temp = [...prevBlock]
        return blockHandler(temp,'down')
      } )
    }, 1000);
    return () => clearInterval(interval);
  }

  const moveLeft = () => {
    setBlock( prevBlock => blockHandler(prevBlock,'left') )
  }
  
  const moveRight = () => {
    setBlock( prevBlock => blockHandler(prevBlock,'right') )
  }

  const moveDown = () => {
    setBlock( prevBlock => blockHandler(prevBlock,'down') )
  }


  
  return (
    <div>
      <div className="main_container Tetris_main_container">
        {squares.map((item) => (<Square key={item.coor} active={item.active} coor={item.coor} />)) 
        }
      </div>
      <div className='low_container'>
        <Button onClick={startTetris}>Start</Button>
        <Button onClick={moveLeft} >L</Button>
        <Button onClick={moveDown} >D</Button>
        <Button onClick={moveRight} >R</Button>
        {/* <Button onClick={()=>changeBlockState(['0-0'],['0-1'])}>test</Button> */}
        <Button onClick={generateNewBlock}>New Block</Button>
      </div>
    </div>

  )
} 
export default Tetris;