import './style/style.css'
import { useEffect, useState, useRef } from 'react'
import Square from './components/Square'
import Block from './components/Block'
import Button from '../Button'
import { SQUARES_DATA, DEF_CHIP_THEME_CODE, START_BLOCK_COOR, MAX_X } from './constants'
import { randomPick } from './functions'
const Tetris = () =>{
  const [status, setStatus] = useState('notStart')
  const [squares, setSquares] = useState(SQUARES_DATA)
  const [blocks, setBlocks] = useState(SQUARES_DATA)
  const prevBlocksRef = useRef([''])

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
        setInterval(() => {
          setBlocks((prevState) => {
            const prevBlocks = [...prevState];
            prevBlocks.shift();
            const defColorArray = new Array(MAX_X).fill(DEF_CHIP_THEME_CODE);
            prevBlocks.push(defColorArray);
            return prevBlocks
          });
        }, 1000);
        break
      case 'collision':
        console.log('bottom!')
        setBlocks(SQUARES_DATA)
        setSquares(prevBlocksRef.current[0])
        break



    }

  }, [status]);

  useEffect(()=> {
    prevBlocksRef.current.shift();
    prevBlocksRef.current.push(blocks);
  },[blocks])


  useEffect(()=>{
    // console.log(blocks)
    let hasCollision = false;
    // const temp = JSON.parse(JSON.stringify(blocks));
    blocks.forEach((row,index_y) => {
      if (index_y === 0){
        row.forEach((colorCode, index_x) => {
          if(colorCode !== DEF_CHIP_THEME_CODE ) {
            hasCollision = true
            console.log(index_x,index_y)
          }
        })
      }
    })
    if (hasCollision) {
      setStatus('collision')
    }
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