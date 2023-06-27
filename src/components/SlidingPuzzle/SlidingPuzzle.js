import Cell from './components/Cell'
import Button from '../Button'
import { chip0, chip1, chip2, chip3, chip4, chip5, 
  chip6, chip7, chip8} from '../../data/shrek'

const SlidingPuzzle = ({
  startTheGame,
  SolveTheGame,
  imageLocationIndex,
  gameStatus
}) => {
  const SHREK_PIECES = [
    chip0, chip1, chip2, chip3, chip4,chip5, 
    chip6, chip7, chip8
  ]

  const switchImage = (imageIndex) => {
    alert(imageIndex)
    // useRef();
  }

  return(
    <div>
      <div className="main_container SlidingPuzzle_main_container">
        {imageLocationIndex.map((index) => 
          (<Cell key={index} 
            piece={SHREK_PIECES[index]}
            onClick = {() => switchImage(index)}
            />) ) 
        }
      </div>
      <div className='low_container'>
        <Button onClick={startTheGame}>Start</Button>
        <Button onClick={SolveTheGame}>Solve</Button>
      </div>
    </div>
  )
}
export default SlidingPuzzle;


