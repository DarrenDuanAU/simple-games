const Chip = ({
  character,
  index
}) => {
  return (
    <div className="chip">
      {character === "?" 
      ? <input className="WordGuess_input"></input>
      : character}
      
    </div>
  )
}
export default Chip;