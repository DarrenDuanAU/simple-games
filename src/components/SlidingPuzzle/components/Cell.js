const Cell = ({
  piece
}) => (
  <div className="cell">
    <img 
      src={piece}
      width={118} 
      height={118} 
    >
    </img>
  </div>
)
export default Cell;