import Chip from './components/Chip'
import Button from '../Button/Button'
const WordGuess = () => {
  const CHIP_INDEX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12]
  return (
    <div>
      <div className="main_container WordGuess_main_container ">
        {CHIP_INDEX.map((index) => (<Chip key={index} index={index} />)) }
      </div>
      <div className='low_container'>
        <Button>Start</Button>
      </div>
    </div>
  )
}
export default WordGuess;