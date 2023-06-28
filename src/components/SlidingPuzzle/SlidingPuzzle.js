import Cell from './components/Cell'
import Button from '../Button'
import { chip0, chip1, chip2, chip3, chip4, chip5, 
  chip6, chip7, chip8} from '../../data/shrek'

const SHREK_PIECES = [
  chip0, chip1, chip2, chip3, chip4,chip5, 
  chip6, chip7, chip8
]

const SlidingPuzzle = ({
  startTheGame,
  resetTheGame,
  solveTheGame,
  onImageClick,
  imageIds,
}) => {

  return(
    <div>
      <div className="main_container SlidingPuzzle_main_container">
        {imageIds.map((imageId,index) => 
          (<Cell key={index} 
            piece={SHREK_PIECES[imageId]}
            onClick = {() => onImageClick(imageId,index)}
            />) ) 
        }
      </div>
      <div className='low_container'>
        <Button onClick={startTheGame}>Start</Button>
        <Button onClick={resetTheGame}>Reset</Button>
        <Button onClick={solveTheGame}>Solve</Button>
      </div>
    </div>
  )
}
export default SlidingPuzzle;


