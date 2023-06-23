import './App.css';
import WordGuess from './components/WordGuess';
import SlidingPuzzle from './components/SlidingPuzzle';
import Tetris from './components/Tetris';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer'
import { useState } from 'react'
import React from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState("Home")

  const ButtonClickHandler = (page) => {
    setCurrentPage(page)
  }
  return (
    <>
      <Header onHeaderClick={ButtonClickHandler}/>
      <div className ='page'>
        <div className="content">
          {(currentPage === "Home") && <Home />}
        </div>
        <div className="content">
          {(currentPage === "Sliding Puzzle") && <SlidingPuzzle />}
        </div>
        <div className="content">
          {(currentPage === "Tetris") && <Tetris />}
        </div>
        <div className="content">
          {(currentPage === "Word Guess") && <WordGuess />}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default App;
