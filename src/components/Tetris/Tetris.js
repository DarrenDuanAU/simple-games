import Block from './components/Block'
import Button from '../Button'
const Tetris = () =>{
  const BLOCK_INDEX = [];
  for( let i=0; i< 150; i++){
    BLOCK_INDEX.push(i)
  }
  return (
    <div>
      <div className="main_container Tetris_main_container">
        {BLOCK_INDEX.map((index) => (<Block key={index} />)) 
        }
      </div>
      <div className='low_container'>
        <Button>Start</Button>
        <Button>L</Button>
        <Button>D</Button>
        <Button>R</Button>
      </div>
    </div>

  )
} 
export default Tetris;