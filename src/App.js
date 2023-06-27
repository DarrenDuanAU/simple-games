import './App.css';
import WordGuess from './components/WordGuess';
import SlidingPuzzle from './components/SlidingPuzzle';
import Tetris from './components/Tetris';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import React from 'react'
import { shuffleArray } from './utils/commonFunctions';

function App() {
  const [currentPage, setCurrentPage] = useState("Home")
  const [puzzleCellIndex, SetPuzzleCellIndex] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [puzzleGameStart, setPuzzleGameStart] = useState(false);

  const ButtonClickHandler = (page) => {
    setCurrentPage(page)
  }

  const startGameSlidingPuzzle = () => {
    setPuzzleGameStart(true);
  }

  useEffect(() => {
    if(puzzleGameStart === true){
      SetPuzzleCellIndex(shuffleArray([0,1,2,3,4,5,6,7,8]));
    }
  },[puzzleGameStart])

  return (
    <>
      <Header onHeaderClick={ButtonClickHandler}/>
      <div className='page'>          
        {(currentPage === "Home") && <Home />}
        {(currentPage === "Sliding Puzzle") && 
          <SlidingPuzzle 
            startTheGame={startGameSlidingPuzzle} 
            cellLocationIndex={puzzleCellIndex} 
          />}
        {(currentPage === "Tetris") && <Tetris />}
        {(currentPage === "Word Guess") && <WordGuess />}
      </div>
      <Footer />
    </>
  )
}
export default App;
