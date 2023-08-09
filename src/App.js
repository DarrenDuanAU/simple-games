import './style/App.css';
import './input.css'
import WordGuess from './components/WordGuess';
import SlidingPuzzle from './components/SlidingPuzzle';
import Tetris from './components/Tetris';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer'
import { useState, useRef } from 'react'
import React from 'react'

function App() {
  const [score, setScore] = useState(0);
  const [currentPage, setCurrentPage] = useState("Home")
  const intervalIds = useRef([])

  const ButtonClickHandler = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <Header onHeaderClick={ButtonClickHandler}/>
      <div className='page'>          
        {(currentPage === "Home") && <Home score={score} intervalIds={intervalIds}/>}
        {(currentPage === "Sliding Puzzle") && <SlidingPuzzle setScore={setScore} intervalIds={intervalIds}/>}
        {(currentPage === "Tetris") && <Tetris setScore={setScore} intervalIds={intervalIds}/>}
        {(currentPage === "Word Guess") && <WordGuess setScore={setScore} intervalIds={intervalIds}/>}
      </div>
      <Footer />
    </>
  )
}
export default App;
