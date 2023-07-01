const Chip = ({
  character,
  index
}) => {
  return (
    <div className="chip">
      {character === "?" 
      ? <input className="WordGuess_input" maxLength={1}></input>
      : character}
      
    </div>
  )
}
export default Chip;