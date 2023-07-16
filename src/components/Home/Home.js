import ScoreBoard from './components/ScoreBoard'

const Home = ({
  score
}) => (
  <div className='home'>
    <div>
    Please Choose a game from the Navbar!
    </div>
    <ScoreBoard score={score}/>
  </div>
  
)
export default Home;