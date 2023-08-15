import { useState, useEffect, useRef } from 'react'
import './style.css'
import Cell from './components/Cell'
import Button from '../Button'
import { shuffleArray, swapTwoElementsInArray } from '../../utils/commonFunctions'
import { SHREK_PIECES,PUZZLE_CLICK_MAP } from './constants'


const SlidingPuzzle = ({
  setScore,
  intervalIds
}) => {
  const firstUpdate = useRef(0);
  const [imageIds, SetImageIds] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [gameStarted, setGameStarted] = useState(false);
  const [mask, setMask] = useState('mask')

  const startTheGame = () => {
    setGameStarted(prevState => !prevState);
  }

  useEffect(()=> {
    intervalIds.current.forEach(intervalId => clearInterval(intervalId))
  },[intervalIds])

  useEffect(() => {
    const OriginImageIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    if ( gameStarted === true){
      SetImageIds(shuffleArray(OriginImageIds));
      setMask('mask mask-active')
    } else {
      SetImageIds(OriginImageIds);
      setMask('mask')
    }
  },[gameStarted]);

  useEffect(() => {
    //console.log('in useEffect')
    if (firstUpdate.current >=2 &&
      JSON.stringify(imageIds) === JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8])){
        alert('you won 10 marks!')
        setScore(prevState => prevState + 10)
    } else {
      firstUpdate.current = firstUpdate.current + 1
      //console.log('in initial2',imageIds, firstUpdate.current)
    }
  },[imageIds,setScore]);


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
    <div className='container'>
      <div className='sliding_puzzle_scoreBoard'>Solve puzzle to win 10 points</div>
      <div className="SlidingPuzzle_main_container">
        <div className={mask}></div>
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
      {/* {firstUpdate.current} */}
    </div>
  )
}
export default SlidingPuzzle;


