import ScoreBoard from './components/ScoreBoard'
import { useEffect } from 'react'

const Home = ({
  score,
  intervalIds
}) => {
  //clean up all intervals
  useEffect(() => {
    intervalIds.current.forEach((intervalId) => {
      clearInterval(intervalId)
    })
  },[intervalIds])

  return (
  <div className='home'>
    <div>
    Please Choose a game from the Navbar!
    </div>
    <ScoreBoard score={score}/>
  </div>
  
)

}
export default Home;