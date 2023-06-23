import Logo from './components/Logo'
import Navbar from './components/Navbar'

const Header = ({
  onHeaderClick
}) => {


  return (
    <div className='header'>
      <Logo />
      <Navbar onNavbarClick={onHeaderClick}/>
    </div>
  )
}
export default Header;