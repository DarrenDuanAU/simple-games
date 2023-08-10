import { CHIP_THEME,DEF_CHIP_THEME_CODE } from "../constants";

const Block = ({
  coor,
  themeCode
}) => {
  return (
    <div className={`block block_${CHIP_THEME[themeCode].color}`}>
      {/* {coor} */}
      <div className={themeCode !== DEF_CHIP_THEME_CODE ?'triangle':''}></div>
    </div>
  )
}
export default Block;