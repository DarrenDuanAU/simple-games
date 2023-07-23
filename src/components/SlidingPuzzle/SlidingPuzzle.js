import { useState, useEffect } from 'react'
import './style.css'
import Cell from './components/Cell'
import Button from '../Button'
import { shuffleArray, swapTwoElementsInArray } from '../../utils/commonFunctions'
import { SHREK_PIECES,PUZZLE_CLICK_MAP } from './constants'



const SlidingPuzzle = () => {
  const [imageIds, SetImageIds] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [gameStarted, setGameStarted] = useState(false);

  const startTheGame = () => {
    if(gameStarted === false) {
      console.log('start the game')
      SetImageIds(shuffleArray([1,2,3,4,5,6,7,8,0]));
      setGameStarted(true);
    }
  }

  useEffect(() => {
    if ( gameStarted === true &&
      JSON.stringify(imageIds) === JSON.stringify([0,1,2,3,4,5,6,7,8]) ) {
      alert('Sliding Puzzle win!');
    }
  },[imageIds, gameStarted]);

  const resetTheGame = () => {
    if(gameStarted === true){
      setGameStarted(false)
      SetImageIds([0,1,2,3,4,5,6,7,8]);
    }
  }

  const solveTheGame= () => {
    if (gameStarted=== true) {
      SetImageIds([0,1,2,3,4,5,6,7,8]);
    }
  }

  const switchImage = (locationId) => {
    const locationChecks = PUZZLE_CLICK_MAP.find((item) => item.click === locationId)?.check 
    for( let i=0 ; i<locationChecks.length ; i++ ) {
      if( imageIds[locationChecks[i]] === 8 ) {
        const targetLocationId = locationChecks[i]
        SetImageIds((prevState) => {
          return swapTwoElementsInArray([...prevState], locationId, targetLocationId)
        });
      }
    }
  }

  return(
    <div>
      <div className="main_container SlidingPuzzle_main_container">
        {imageIds.map((imageId,index) => 
          (<Cell 
            key={index} 
            piece={SHREK_PIECES[imageId]}
            onClick = {() => switchImage(index)}
            />) ) 
        }
      </div>
      <div className='low_container'>
        {gameStarted === false 
          ? 
          <Button onClick={startTheGame}>Start</Button> 
          : 
          <Button onClick={resetTheGame}>Reset</Button>}     
        <Button onClick={solveTheGame}>Solve</Button>
      </div>
    </div>
  )
}
export default SlidingPuzzle;


