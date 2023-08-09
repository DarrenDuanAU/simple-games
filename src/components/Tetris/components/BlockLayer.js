import Block from "./Block";

const BlockLayer = ({blocks}) => {
  return (
    <>
      {blocks?.map((row, y)=>(
        row?.map((themeCode, x)=>(
          <Block key={x+'-'+y} themeCode={themeCode} coor={x+'-'+y}></Block>
        ))
      ))}
    </>
  )
}
export default BlockLayer;