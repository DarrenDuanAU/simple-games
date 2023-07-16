import Chip from './components/Chip'
import Button from '../Button/Button'
import { wordStrs } from '../../data/wordStrs'
import { useEffect, useState } from 'react'

const WordGuess = () => {
  const [currentWord, setCurrentWord] = useState("CLICK 2START");
  const [markedWord, setMarkedWord] = useState("CLICK 2START");
  const [clickCounter, setClickCounter] = useState(0);

  
  useEffect(() => {
    if (currentWord === "CLICK 2START" ){
      setMarkedWord(currentWord);
    } else {
      let tempWord = currentWord.split('');
      let i = 0;
      while ( i < 3 ) {
        const markIndex = Math.floor( Math.random() * 12 );
        // console.log(markIndex, tempWord[markIndex])
        if ( tempWord[markIndex]!== ' ' && tempWord[markIndex]!=='?'){
          // console.log('not a space');
          tempWord[markIndex]='?';
          i += 1;
        }
      }
      console.log(tempWord)
      setMarkedWord(tempWord.join(''));
    }
  },[currentWord]);


  const updateWord = () => {
    let randomIndex = Math.floor(Math.random() * wordStrs.length) 
    while ( wordStrs[randomIndex] === currentWord ){
      randomIndex = Math.floor(Math.random() * wordStrs.length) 
    }
    setCurrentWord(wordStrs[randomIndex])
    setClickCounter(preState => preState + 1)
  }

  return (
    <div>
      <div className="main_container WordGuess_main_container ">
        { markedWord.split('').map( (character ,index) =>  (<Chip key={`${clickCounter} - ${index}`} char={character} />)) }
        
      </div>
      <div className='low_container'>
          <Button onClick={updateWord}>
            {currentWord === "CLICK 2START" 
            ? 
              "Start"
            : 
              "Skip"
            }
          </Button>
          {/* {markedWord} */}
      </div>
    </div>
  )
}
export default WordGuess;