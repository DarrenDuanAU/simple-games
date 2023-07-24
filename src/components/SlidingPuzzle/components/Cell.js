
const Cell = ({
  piece,
  onClick,
}) => {
  return (
    <div 
      className="cell"
      onClick={onClick}
    >
      <img 
        src={piece}
        alt="shrek_pieces"
      >
      </img>
    </div>
  )
}
export default Cell;