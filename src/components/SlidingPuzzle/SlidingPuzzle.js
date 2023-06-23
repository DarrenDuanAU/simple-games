import Cell from './components/Cell'

const SlidingPuzzle = () => {
  const CELL_INDEX = [1, 2, 3, 4, 5, 6, 7, 8];

  return(
    <div className="SlidingPuzzle_container">
      {CELL_INDEX.map((index) => (<Cell key={index}/>) ) }
    </div>
  )
}
export default SlidingPuzzle;


