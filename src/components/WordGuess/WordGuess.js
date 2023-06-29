import Chip from './components/Chip'
import Button from '../Button/Button'
import { wordStrs } from '../../data/wordStrs'
import { useState } from 'react'

const WordGuess = ({
}) => {
  const CHIP_INDEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]
  const [currentWord, setCurrentWord] = useState("CLICK 2START");

  const resetTheGame = () => {

    const targetIndex = Math.floor(Math.random() * wordStrs.length) 
    setCurrentWord((preState) => {
      const targetStr = wordStrs[targetIndex]
      if ( preState !== targetStr ) {
        return targetStr;
      }else {
        if (targetIndex === 0) {
          return wordStrs[1]
        }
        return wordStrs[targetIndex - 1 ]
      }
    })
  }

  return (
    <div>
      <div className="main_container WordGuess_main_container ">
        {CHIP_INDEX.map((index) => (<Chip key={index} index={currentWord[index]} />)) }
      </div>
      <div className='low_container'>
          <Button onClick={resetTheGame}>
            {currentWord === "CLICK 2START" 
            ? 
              "Start"
            : 
              "Reset"
            }
          </Button>
      </div>
    </div>
  )
}
export default WordGuess;