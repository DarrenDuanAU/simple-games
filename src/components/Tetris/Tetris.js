import './style.css'
import { useEffect, useState, useRef } from 'react'
import Square from './components/Square'
import Button from '../Button'
import { SQUARES_DATA, START_BLOCK_COOR } from './constants'
const Tetris = () =>{
  const [squares, setSquares] = useState(SQUARES_DATA);
  // const preSquares = useRef(SQUARES_DATA);
  const [block, setBlock] = useState([])
  // const preBlock = useRef('')

  const startTetris = () => {
    alert("game start")
  }

  // useEffect(() => {
  //   preSquares.current = squares;
  // },[squares])

  // useEffect(() => {
  //   preBlock.current = blockPre (block);
  //   console.log('preBlock',preBlock.current)
  // },[block])


  useEffect(() => {
    
    setSquares( (prevSquares) =>{
      const preBlock = blockPre(block)
      const tempSquares = [...prevSquares]
      const result = tempSquares.map((square) => {
        if (block.includes(square.coor) ) {
          return {...square, active: true}
        } if (preBlock.includes(square.coor) ) {
          return {...square, active: false}
        } 
        else {
          return square;
        }
      })
      return result
    })
  },[block])

  const blockDropDown = (coors) => {
    const result = coors.map((coor) => {
      const realCoor = coor.split('-').map((string) => Number(string))
      return (realCoor[0]+1)+ '-' +realCoor[1]
    })
    // console.log('blockDropDown',result)
    return result
  }

  const blockPre = (coors) => {
    const result = coors.map((coor) => {
      const realCoor = coor.split('-').map((string) => Number(string))
      return (realCoor[0]-1)+ '-' +realCoor[1]
    })
    // console.log('blockPre',result)
    return result
  }



  const generateNewBlock = () => {
    const BlockCoor = START_BLOCK_COOR[Math.floor(Math.random()*3)]
    setBlock(BlockCoor)
    const interval = setInterval(() => {
      // console.log('This will run every second!');
      setBlock( prevBlock => {
        const temp = [...prevBlock]
        return blockDropDown(temp)
      } )
    }, 1000);
    return () => clearInterval(interval);
  }


  
  return (
    <div>
      <div className="main_container Tetris_main_container">
        {squares.map((item) => (<Square key={item.coor} active={item.active} coor={item.coor} />)) 
        }
      </div>
      <div className='low_container'>
        <Button onClick={startTetris}>Start</Button>
        <Button >L</Button>
        {/* <Button onClick={()=>changeBlockState(['0-0'],['0-1'])}>test</Button> */}
        <Button onClick={generateNewBlock}>New Block</Button>
        <Button onClick={() => blockDropDown(['0-1','1-1'])}>dropDown </Button>


      </div>
    </div>

  )
} 
export default Tetris;