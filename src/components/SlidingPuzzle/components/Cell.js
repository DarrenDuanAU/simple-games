
const Cell = ({
  piece,
  onClick
}) => {
  return (
    <div 
      className="cell"
      onClick={onClick}
    >
      <img 
        src={piece}
        width={120} 
        height={120} 
      >
      </img>
    </div>
  )
}
export default Cell;