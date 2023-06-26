import Block from './components/Block'
import Button from '../Button'
const Tetris = () =>{
  const BLOCK_INDEX = [];
  for( let i=0; i< 15; i++){
    for( let j=0; j< 10; j++){
      BLOCK_INDEX.push(`${i}-${j}`);
    }
  }
  
  const startTetris = () => {
    alert("game start")
  }

  const TetrisMoveLeft = () => {
  }


  
  return (
    <div>
      <div className="main_container Tetris_main_container">
        {BLOCK_INDEX.map((index) => (<Block key={index} index={index} />)) 
        }
      </div>
      <div className='low_container'>
        <Button onClick={startTetris}>Start</Button>
        <Button onClick={TetrisMoveLeft}>L</Button>
        <Button>D</Button>
        <Button>R</Button>
      </div>
    </div>

  )
} 
export default Tetris;