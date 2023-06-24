import Cell from './components/Cell'
import Button from '../Button'
import { chip1, chip2, chip3, chip4, chip5, 
  chip6, chip7, chip8, chip9} from '../../data/shrek'

const SlidingPuzzle = () => {
  const CELL_INDEX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const SHREK_PIECES = [
    chip1, chip2, chip3, chip4,chip5, 
    chip6, chip7, chip8, chip9
  ]

  const switchImage = (cellIndex) => {
    alert(cellIndex)
    // useRef();
  }

  return(
    <div>
      <div className="SlidingPuzzle_main_container">
        {CELL_INDEX.map((index) => 
          (<Cell key={index} 
            piece={SHREK_PIECES[index]}
            onCellClick = {() => switchImage(index)}
            />) ) 
        }
      </div>
      <div className='SlidingPuzzle_low_container'>
        <Button>Start</Button>
        <Button>Check</Button>
      </div>
    </div>
  )
}
export default SlidingPuzzle;


