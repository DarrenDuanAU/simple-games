import Chip from './components/Chip'
import Button from '../Button/Button'
import { wordStrs } from '../../data/wordStrs'
import { useEffect, useState } from 'react'
import './style.css'

const WordGuess = ({
  setScore,
  intervalIds
}) => {
  const [currentWord, setCurrentWord] = useState("CLICK 2START");
  const [markedWord, setMarkedWord] = useState("CLICK 2START");
  const [clickCounter, setClickCounter] = useState(0);
  const [inputIds, setInputIds] = useState([0])
  const [WordGuessScore, setWorGuessScore] = useState(0)

  useEffect(()=> {
    intervalIds.current.forEach(intervalId => clearInterval(intervalId))
  },[intervalIds])


  useEffect(() => {
    if(inputIds.length === 0) {
      setScore(prevState => prevState + 3)
      setWorGuessScore(s => s + 3)
    }
  }, [inputIds,setScore])


  useEffect(() => {
    if (currentWord === "CLICK 2START" ){
      setMarkedWord(currentWord);
    } else {
      let tempWord = currentWord.split('');
      let i = 0;
      let tempInputIds = []
      while ( i < 3 ) {
        const markIndex = Math.floor( Math.random() * 12 );
        if ( tempWord[markIndex]!== ' ' && tempWord[markIndex]!=='?'){
          tempInputIds.push(markIndex)
          tempWord[markIndex]='?';
          i += 1;
        }
      }
      setInputIds(tempInputIds)
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

  const checkAnswer = (e) => {
    const chipId = Number(e.target.id);
    const chipValue = e.target.value;
    // console.log(chipId, chipValue);

    if ( chipValue === '') {
      setInputIds(preState => [...preState, chipId])
    } 
    if ( chipValue === currentWord[chipId] ) {
      setInputIds(preState => preState.filter((item) => item !== chipId))
    } 
  }

  return (
    <div className='container'>
      <di className='word_guess_scoreboard'>Word Guess Score: {WordGuessScore}</di>   
      <div className="upper_container">
        { markedWord.split('').map( (character ,index) =>  (<Chip key={`${clickCounter} - ${index}`} onChange={checkAnswer} index={index} char={character} />)) }
        
      </div>
      <div className='low_container'>
          <Button onClick={updateWord}>
            {currentWord === "CLICK 2START" 
            ? 
              "Start"
            : 
              "Next"
            }
          </Button>
          {/* {inputIds.map((item,index) => <div key={index}>{item}</div>)} */}
      </div>
    </div>
  )
}
export default WordGuess;