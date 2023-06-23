import './App.css';
import Blanko from './components/Blanko/Blanko';
import Slido from './components/Slido';
import Tetro from './components/Tetro';
import Home from './components/Home';
import Header from './components/Header';
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
      {(currentPage === "Home") && <Home />}
      {(currentPage === "Slido") && <Slido />}
      {(currentPage === "Tetro") && <Tetro />}
      {(currentPage === "Blanko") && <Blanko />}
    </>
  )
}
export default App;
