import { useState } from "react";
const Chip = ({
  character,
}) => {
  const [value, setValue]=useState('')
  return (
    <div className="chip">
      {character === "?" 
      ? <input className="WordGuess_input" value={value} onChange={(e) => setValue(e.target.value)} maxLength={1}></input>
      : character}
      
    </div>
  )
}
export default Chip;