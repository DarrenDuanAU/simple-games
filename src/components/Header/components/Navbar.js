import Button from './Button'

const Navbar = () => {
  const PAGES_NAME = [
    { page: "Home" },
    { page: "Slido" },
    { page: "Tetro" },
    { page: "Blanko" },
  ];


  const PageHandler = () => {
    alert({page})
  }

  return (
    <div>
      {PAGES_NAME.map(({page}) => ( 
      <Button key={page} onClick={PageHandler}>
        {page}
      </Button> ))}
    </div>
  )
}
export default Navbar;