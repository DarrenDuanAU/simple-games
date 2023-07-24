import { useState, useEffect, useRef } from 'react'
import './style.css'
import Cell from './components/Cell'
import Button from '../Button'
import { shuffleArray, swapTwoElementsInArray } from '../../utils/commonFunctions'
import { SHREK_PIECES,PUZZLE_CLICK_MAP } from './constants'



const SlidingPuzzle = () => {
  const [imageIds, SetImageIds] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [gameStarted, setGameStarted] = useState(false);
  const firstUpdate = useRef(true);

  const startTheGame = () => {
    setGameStarted(prevState => !prevState);
  }

  useEffect(() => {
    const OriginImageIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    if ( gameStarted === true){
      SetImageIds(shuffleArray(OriginImageIds));
    } else {
      SetImageIds(OriginImageIds);
    }
  },[gameStarted]);

  useEffect(() => {
    if (firstUpdate.current) {
      console.log('first time')
      firstUpdate.current = false;
      return;
    }
    //  else if (firstUpdate.current === false && JSON.stringify(imageIds) === JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8])) {
    //   alert('Sliding Puzzle win!');
    // }
    console.log('first time 2')
  },[imageIds]);


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
          <Button onClick={startTheGame}>Solve</Button>}     
      </div>
    </div>
  )
}
export default SlidingPuzzle;


