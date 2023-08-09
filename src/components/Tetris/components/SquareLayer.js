import Square from "./Square";

const SquareLayer = ({squares}) => {
  return (
    <>
     {squares?.map((row, y)=>(
      row?.map((themeCode, x)=>(
        <Square key={x+'-'+y} themeCode={themeCode} coor={x+'-'+y}></Square>
      ))
    ))}
    </>
  )
}

export default SquareLayer;