import { useEffect, useState } from "react";
const Chip = ({
  char,
  test
}) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log("rereder!")
    setValue('')
  },[])

  return (
    <>
      <div className="chip">
        { char === '?'
        ? <input className="WordGuess_input" value={value} onChange={(e) => setValue(e.target.value)} maxLength={1}></input>
        : char}
      </div>
      <div>
        {test}
      </div>
    </>
  )
}
export default Chip;