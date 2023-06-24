
const Cell = ({
  piece,
  onCellClick
}) => {
  return (
    <div 
      className="cell"
      onClick={onCellClick}
    >
      <img 
        src={piece}
        width={118} 
        height={118} 
      >
      </img>
    </div>
  )
}
export default Cell;