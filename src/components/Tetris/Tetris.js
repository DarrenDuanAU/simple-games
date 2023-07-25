import './style.css'
import { useEffect, useRef, useState } from 'react'
import Square from './components/Square'
import Button from '../Button'
import { SQUARES_DATA, START_BLOCK_COOR, MAX_I, MAX_J } from './constants'
// import { blockHandler } from './functions'
const Tetris = ({
  intervalIds
}) =>{
  const [squares, setSquares] = useState(SQUARES_DATA);
  const [block, setBlock] = useState([])
  const [bottom, setBottom] = useState(false);
  const preBlock = useRef(['',''])

  //clean up all intervals
  useEffect(() => {
    intervalIds.current.forEach((intervalId) => {
     clearInterval(intervalId)
    })
  },[intervalIds])

  useEffect(() => {
    preBlock.current.shift()
    preBlock.current.push(block)
  },[block])

  useEffect(() => {
    if(bottom){
      console.log('reachedBottom')
      preBlock.current.shift()
      preBlock.current.push('')
      const BlockCoor = START_BLOCK_COOR[Math.floor(Math.random()*3)]
      setBottom(false)
      setBlock(BlockCoor)
    }
  },[bottom])

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


  useEffect(()=> { 
    block.forEach((coor) => {
      const numberCoor = coor.split('-').map((string) => Number(string))
      if(numberCoor[0] === MAX_I - 1) {
        setBottom(true)
        return
      } 
    })
    let blockBottom;
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


  const blockHandler = (coors, direct) => {
    let valid = true
    const result = coors.map((coor) => {
      const numberCoor = coor.split('-').map((string) => Number(string))
      if ( direct ==='down' && numberCoor[0] < MAX_I - 1){
        return (numberCoor[0] + 1) + '-' + numberCoor[1]
  
      } else if ( direct==='left' &&  numberCoor[1] > 0 ){
        return numberCoor[0] + '-' + (numberCoor[1] - 1)
  
      } else if ( direct === 'right' && numberCoor[1] <MAX_J - 1){
        return numberCoor[0] + '-' + (numberCoor[1] + 1)
  
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

  const squareActive = (coor) => {
    let active = false
    squares.forEach((square) => {
      if (coor === square.coor) {
        active = square.active
      }
    })
    return active
  }

  const generateNewBlock = () => {
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
    console.log('intervalIds',intervalIds)
    // return () => clearInterval(interval);
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
        <Button onClick={generateNewBlock}>Start</Button>
        <Button onClick={moveLeft} >L</Button>
        <Button onClick={moveDown} >D</Button>
        <Button onClick={moveRight} >R</Button> 
         {/* <Button onClick={()=>changeBlockState(['0-0'],['0-1'])}>test</Button> */}
      </div>
    </div>

  )
} 
export default Tetris;