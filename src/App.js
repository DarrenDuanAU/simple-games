import './App.css';
import Blanko from './components/Blanko/Blanko';
import Slido from './components/Slido';
import Tetro from './components/Tetro';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  // const [currentPage, setCurrentPage] = useState("Home");

  // const PageClickHandler = () => {
  //   setCurrentPage({Children})
  // }

  return (
    <>
      <Header/>
      <Home />
      <Slido />
      <Tetro />
      <Blanko />
    </>
  )
}
export default App;
