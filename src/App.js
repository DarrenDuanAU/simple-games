import { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Blanko from './Blanko';
import Slido from './Slido';
import Tetro from './Tetro';

function App() {
  const [smallViewPort,setSmallViewPort] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(() =>{
    setScore(localStorage.getItem('score'))
    if (window.innerWidth <= 800) {
      setSmallViewPort(true); 
      fetchData();
    }
  },[]);

  function refreshScore () {
    setScore(localStorage.getItem('score'));
  }

  async function fetchData () {
    localStorage.setItem('score', 0);
    setScore(0);
    console.log('set the localstorage score to 0')
    if(localStorage.getItem('score') === null){
      const response = await fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        }
      })
      if(response){
        const data = await response.json();
        console.log(data)
        setScore(data.score);
      }
    }
  }

  const Home = () => {
    return(
      <>
        <div id = 'home'>
          <div style={{color: 'red', fontSize: '2em'}}>
          Please choose an option from the navbar.
          </div>
          <div>
            Games won: {score}
            <button style={{margin: '5px'}} onClick={fetchData}>reset</button>
          </div>
        </div>
      </>
    )
  }
  
  return (
    <>
      <BrowserRouter>
        <nav>
          <div className='header'>
            <div>
              <img src={logo} className='App-logo' alt="logo" />
            </div>
            <div className='nav'>
              <Link to='/' onClick={refreshScore}> {smallViewPort ? 'H' : 'Home'} </Link> &nbsp;|&nbsp;
              <Link to='/blanko'> {smallViewPort ? 'B' : 'Blanko'} </Link> &nbsp;|&nbsp;
              <Link to='/slido'> {smallViewPort ? 'S' : 'Slido'} </Link> &nbsp;|&nbsp;
              <Link to='/tetro'> {smallViewPort ? 'T' : 'Tetro'}</Link>
            </div>
          </div>
        </nav>
        <div className='filler'></div> 
        {/* <div>
          Width: {window.innerWidth};
          <br />
          smallViewPort: {smallViewPort ? 'small' : 'large'};
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blanko" element={<Blanko />} />
          <Route path="/slido" element={<Slido />} />
          <Route path="/tetro" element={<Tetro />} />
        </Routes>
        <footer>
          <div className='footer'></div>
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App;
