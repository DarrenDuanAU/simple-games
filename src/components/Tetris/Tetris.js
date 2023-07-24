import './style.css'
import { useState } from 'react'
import Block from './components/Block'
import Button from '../Button'
import { BLOCK_DATA, START_COOR } from './constants'
const Tetris = () =>{
  const [blocks, setBlocks] = useState(BLOCK_DATA)

  const startTetris = () => {
    alert("game start")
  }

  const changeBlockState = (coor,active) => {
    const temp_list = BLOCK_DATA.map((item) => {
      if (item.coor === coor ) {
        return {...item, active: active}
      } else {
        return item;
      }
    });

    console.log(temp_list)
    setBlocks(temp_list)
  }
  
  return (
    <div>
      <div className="main_container Tetris_main_container">
        {blocks.map((item) => (<Block key={item.coor} active={item.active} coor={item.coor} />)) 
        }
      </div>
      <div className='low_container'>
        <Button onClick={startTetris}>Start</Button>
        <Button >L</Button>
        <Button onClick={()=>changeBlockState('1-1',true)}>test</Button>


      </div>
    </div>

  )
} 
export default Tetris;