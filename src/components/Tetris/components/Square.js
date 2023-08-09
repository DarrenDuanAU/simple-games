import { CHIP_THEME } from "../constants";

const Square = ({
  coor,
  themeCode
}) => {
  return (
    <div className={`square square_${CHIP_THEME[themeCode].color}`}>
      {/* {coor} */}
    </div>
  )
}
export default Square;