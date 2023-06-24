import Button from '../../Button'

const Navbar = ({
  onNavbarClick
}) => {
  const PAGES_NAME = [
    { page: "Home" },
    { page: "Tetris" },
    { page: "Sliding Puzzle" },
    { page: "Word Guess" },
  ];


  return (
    <div>
      {PAGES_NAME.map(({page}) => ( 
      <Button key={page} onClick={() => onNavbarClick(page)}>
        {page}
      </Button> ))}
    </div>
  )
}
export default Navbar;