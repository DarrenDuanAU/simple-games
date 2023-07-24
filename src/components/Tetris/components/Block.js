const Block = ({
  coor,
  active
}) => {
  return (
    <div className={active ? 'block block_active':'block'}>
      {coor}
    </div>
  )
}
export default Block;