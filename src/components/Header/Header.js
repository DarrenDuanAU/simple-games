import Log from './components/Log'
import Navbar from './components/Navbar'

const Header = ({
  onHeaderClick
}) => {


  return (
    <div className='header'>
      <Log />
      <Navbar onNavbarClick={onHeaderClick}/>
    </div>
  )
}
export default Header;