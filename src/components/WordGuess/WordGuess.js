import Chip from './components/Chip'
const WordGuess = () => {
  const CHIP_INDEX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12]
  return (
    <div className="main_container WordGuess_main_container ">
    {CHIP_INDEX.map((index) => (<Chip key={index} index={index} />)) 
    }
  </div>
  )
}
export default WordGuess;