import { useState } from "react";
const Chip = ({
  character,
  input
}) => {

  return (
    <div className="chip">
      {character === "?" 
      ? <input className="WordGuess_input" value={input} maxLength={1}></input>
      : character}
      
    </div>
  )
}
export default Chip;