import './App.css';
import WordGuess from './components/WordGuess';
import SlidingPuzzle from './components/SlidingPuzzle';
import Tetris from './components/Tetris';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import React from 'react'
import { shuffleArray, swapTwoElementsInArray } from './utils/commonFunctions';


const PUZZLE_CLICK_MAP = [
  { click: 0, check: [1, 3] },
  { click: 1, check: [0, 2, 4] },
  { click: 2, check: [1, 5] },
  { click: 3, check: [0, 4, 6] },
  { click: 4, check: [1, 3, 5, 7] },
  { click: 5, check: [2, 4, 8] },
  { click: 6, check: [3, 7] },
  { click: 7, check: [4, 6, 8] },
  { click: 8, check: [5, 7] }
]

function App() {
  const [currentPage, setCurrentPage] = useState("Home")
  const [puzzleImageIds, SetPuzzleImageIds] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [puzzleGameStart, setPuzzleGameStart] = useState(false);

  const ButtonClickHandler = (page) => {
    setCurrentPage(page)
  }



  // functions for Sliding Puzzles
  const startGameSlidingPuzzle = () => {
    setPuzzleGameStart(true);
  }

  useEffect(() => {
    if(puzzleGameStart === true){
      SetPuzzleImageIds(shuffleArray([1,2,3,4,5,6,7,8,0]));
    }
  },[puzzleGameStart])

  const resetGameSlidingPuzzle = () => {
    if(puzzleGameStart === true){
      SetPuzzleImageIds([0,1,2,3,4,5,6,7,8]);
      setPuzzleGameStart(false)
    }
  }

  const solveGameSlidingPuzzle = () => {
    if (puzzleGameStart === true) {
      SetPuzzleImageIds([0,1,2,3,4,5,6,7,8]);
    }
  }

  const switchImage = (imageId, locationId) => {
    const locationChecks = PUZZLE_CLICK_MAP.find((item) => item.click === locationId)?.check 
    // console.log(`${imageId}-${locationId}-${locationChecks}`)
    for( let i=0 ; i<locationChecks.length ; i++ ) {
      const targetLocationId = locationChecks[i]
      if( puzzleImageIds[locationChecks[i]] === 8 ) {
        // console.log(`${locationId} => ${targetLocationId}`);
        SetPuzzleImageIds((prevState) => {
          return swapTwoElementsInArray([...prevState], locationId, targetLocationId)
        });
      }
    }
  }

  return (
    <>
      <Header onHeaderClick={ButtonClickHandler}/>
      <div className='page'>          
        {(currentPage === "Home") && <Home />}
        {(currentPage === "Sliding Puzzle") && 
          <SlidingPuzzle 
            startTheGame={startGameSlidingPuzzle} 
            resetTheGame={resetGameSlidingPuzzle}
            solveTheGame={solveGameSlidingPuzzle}
            onImageClick={switchImage}
            imageIds={puzzleImageIds} 
          />}
        {(currentPage === "Tetris") && <Tetris />}
        {(currentPage === "Word Guess") && <WordGuess />}
      </div>
      <Footer />
    </>
  )
}
export default App;
