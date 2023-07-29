import ScoreBoard from './components/ScoreBoard'
import './style.css'

const Home = ({
  score
}) => {

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