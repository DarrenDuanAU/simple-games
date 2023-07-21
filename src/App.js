import './App.css';
import './input.css'
import WordGuess from './components/WordGuess';
import SlidingPuzzle from './components/SlidingPuzzle';
import Tetris from './components/Tetris';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer'
import { useState } from 'react'
import React from 'react'

function App() {
  const [score, setScore] = useState(0);
  const [currentPage, setCurrentPage] = useState("Home")

  const ButtonClickHandler = (page) => {
    setCurrentPage(page)
  }


  return (
    <>
      <Header onHeaderClick={ButtonClickHandler}/>
      <div className='page'>          
        {(currentPage === "Home") && <Home score={score}/>}
        {(currentPage === "Sliding Puzzle") && <SlidingPuzzle />}
        {(currentPage === "Tetris") && <Tetris />}
        {(currentPage === "Word Guess") && <WordGuess />}
      </div>
      <Footer />
    </>
  )
}
export default App;
