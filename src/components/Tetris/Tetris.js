import './style/style.css'
import { useEffect, useState } from 'react'
import Square from './components/Square'
import Block from './components/Block'
import Button from '../Button'
import { SQUARES_DATA, CHIP_THEME, START_BLOCK_COOR, MAX_X } from './constants'
import { randomPick } from './functions'
const Tetris = () =>{
  const [status, setStatus] = useState('notStart')
  const [squares, setSquares] = useState(SQUARES_DATA)
  const [blocks, setBlocks] = useState(SQUARES_DATA)

  useEffect(() => {
    if (status === 'newBlock') {
      // const newColorCode = randomPick(Object.keys(CHIP_THEME));
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
    } else if ( status === 'start') {
      console.log('start!')
      setInterval(() => {
        setBlocks((prevState) => {
          const prevBlocks = [...prevState];
          prevBlocks.shift();
          const zerosArray = new Array(MAX_X).fill(0);
          prevBlocks.push(zerosArray);
          return prevBlocks
        });
      }, 1000);
    }
  }, [status]);

  useEffect(()=>{
    console.log(blocks)
  },[blocks])


  const startGame = () => {
    setStatus('newBlock')
  }

  return (
    <div className='container'>
      <div className='Tetris_upper_container'>
        {squares?.map((row, index_y)=>(
          row?.map((themeCode, index_x)=>(
            <Square key={index_x+'-'+index_y} themeCode={themeCode} coor={index_x+'-'+index_y}></Square>
          ))
        ))}
        <div className='above_Tetris_upper_container'>
        {blocks.map((row, index_y)=>(
          row.map((themeCode, index_x)=>(
            <Block key={index_x+'-'+index_y} themeCode={themeCode} coor={index_x+'-'+index_y}></Block>
          ))
        ))}
        </div>
      </div>
      <div className='lower_container'>
        <Button onClick={startGame}>start</Button>
      </div>
    </div>
    
    
  )
}
export default Tetris;