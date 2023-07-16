const Chip = ({
  char,
  index,
  onChange
}) => {
  // const [value, setValue] = useState('')

  return (
    <>
      <div className="chip">
        { char === '?'
        ? <input className="WordGuess_input" onChange={onChange} id={index} maxLength={1}></input>
        : char}
      </div>
    </>
  )
}
export default Chip;