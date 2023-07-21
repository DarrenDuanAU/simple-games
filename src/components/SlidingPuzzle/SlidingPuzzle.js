import { useState, useEffect } from 'react'
import Cell from './components/Cell'
import Button from '../Button'
import { shuffleArray, swapTwoElementsInArray } from '../../utils/commonFunctions'
import { chip0, chip1, chip2, chip3, chip4, chip5, 
  chip6, chip7, chip8} from '../../data/shrek'

const SHREK_PIECES = [
  chip0, chip1, chip2, chip3, chip4,chip5, 
  chip6, chip7, chip8
]

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


