import Chip from './components/Chip'
import Button from '../Button/Button'
import { wordStrs } from '../../data/wordStrs'
import { useEffect, useState } from 'react'

const WordGuess = () => {
  const [currentWord, setCurrentWord] = useState("CLICK 2START");
  const [markedWord, setMarkedWord] = useState("CLICK 2START");
  
  useEffect(() => {
    if (currentWord === "CLICK 2START" ){
      setMarkedWord(currentWord);
    } else {
      let tempWord = currentWord.split('');
      let i = 0;
      while ( i <3 ) {
        const markIndex = Math.floor( Math.random() * 12 );
        console.log(markIndex, tempWord[markIndex])
        if ( tempWord[markIndex]!== ' ' && tempWord[markIndex]!=='?'){
          console.log('not a space');
          tempWord[markIndex]='?';
          i += 1;
        }
      }
      console.log(tempWord)
      setMarkedWord(tempWord.join(''));
    }
  },[currentWord]);


  const resetTheGame = () => {

    const targetIndex = Math.floor(Math.random() * wordStrs.length) 
    setCurrentWord((preState) => {
      const targetStr = wordStrs[targetIndex]
      if ( preState !== targetStr ) {
        return targetStr;
      }else {
        if (targetIndex === 0) {
          return wordStrs[1];
        }
        return wordStrs[targetIndex - 1];
      }
    })
  }

  return (
    <div>
      <div className="main_container WordGuess_main_container ">
        { markedWord.split('').map((character ,index) => (<Chip key={index} index={index} character={character} />)) }
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
          {markedWord}
      </div>
    </div>
  )
}
export default WordGuess;