const Square = ({
  coor,
  active
}) => {
  return (
    <div className={active ? 'square square_active':'square'}>
      {coor}
    </div>
  )
}
export default Square;