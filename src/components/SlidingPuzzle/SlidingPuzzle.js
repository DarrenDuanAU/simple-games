import Cell from './components/Cell'
import Button from '../Button'
import chip1 from '../../data/shrek/1.png'
import chip2 from '../../data/shrek/2.png'
import chip3 from '../../data/shrek/3.png'
import chip4 from '../../data/shrek/4.png'
import chip5 from '../../data/shrek/5.png'
import chip6 from '../../data/shrek/6.png'
import chip7 from '../../data/shrek/7.png'
import chip8 from '../../data/shrek/8.png'

const SlidingPuzzle = () => {
  const CELL_INDEX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const SHREK_PIECES = []
  SHREK_PIECES.push(chip1)
  SHREK_PIECES.push(chip2)
  SHREK_PIECES.push(chip3)
  SHREK_PIECES.push(chip4)
  SHREK_PIECES.push(chip5)
  SHREK_PIECES.push(chip6)
  SHREK_PIECES.push(chip7)
  SHREK_PIECES.push(chip8)

  return(
    <div>
      <div className="SlidingPuzzle_main_container">
        {CELL_INDEX.map((index) => (<Cell key={index} piece={SHREK_PIECES[index]}/>) ) }
      </div>
      <div className='SlidingPuzzle_low_container'>
        <Button>Start</Button>
        <Button>Check</Button>
      </div>
    </div>
  )
}
export default SlidingPuzzle;


