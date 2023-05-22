import React, { useEffect, useRef, useState } from 'react';

function Cell(props) {
  // return <div id={props.index} className="tetro-cell-default">{props.index}</div>;
  return <div id={props.index} className="tetro-cell-default"></div>;
}

function Tetro () {
  const ROWMAX = 10;
  const COLMAX = 6;
  const containerRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [reachedBot,setReachedBot] = useState(false);
  // let coloredCellIndexs = [];
  const [timer, setTimer] = useState(0)
  const [blockPosition, setBlockPosition] = useState([]);

  useEffect(() => {
    if(reachedBot){
      createObject();
      setReachedBot(false);
    }
  }, [reachedBot]);

  useEffect(() => {
      if(started){
        setInterval(() => {
          setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
      }  
  }, [started]);
  
  useEffect(() => {
    console.log(timer);
    handleObject('Down');
  }, [timer]);

  const handleObject = (direction) => {
    let coloredCellIndexs = blockPosition;
    if (coloredCellIndexs.length === 0){
      console.log('handleObject: error! not valid block info.')
      return
    }

    console.log('coloredCellIndexs', coloredCellIndexs)
    let originRow = coloredCellIndexs[0];
    let originCol = coloredCellIndexs[1];
    let rowMax = coloredCellIndexs[2];
    let colMax = coloredCellIndexs[3];

    // const undercell = document.getElementById(`${rowMax+1}-${originCol}`);
    // console.log(`${rowMax+1}-${originCol}`, undercell.className)

    if(direction === 'Down'){
      if (rowMax === ROWMAX) {
        console.log('reached the bottom');
        setReachedBot(true);
        return
      } else {
        const underCell = document.getElementById(`${rowMax+1}-${originCol}`);
        if(originCol !== colMax) {
          const secUnderCell = document.getElementById(`${rowMax+1}-${colMax}`);
          if (secUnderCell.className !== 'tetro-cell-default') {
            console.log('bottom reached other block');
            setReachedBot(true);
            return
          }
        }
        if (underCell.className !== 'tetro-cell-default') {
          console.log('bottom reached other block');
          setReachedBot(true);
          return
        }
      }
    } else if (direction === 'Left' && (originCol === 1)) {
      console.log('reached the most Left');
      return
    } else if (direction === 'Right' && (colMax === COLMAX)) {
      console.log('reached the most Right');
      return
    }

    // console.log(originRow, originCol, rowMax, colMax)
    for (let row = originRow; row <= rowMax; row++) {
      for (let col = originCol; col <= colMax; col++) {
        const cell = document.getElementById(`${row}-${col}`);
        // console.log('make cell to default', cell);
        cell.classList = 'tetro-cell-default';
      }
    }
    if(direction === 'Down' && (rowMax + 1<= ROWMAX)){
      originRow = originRow + 1;
      rowMax = rowMax + 1;
    } else if (direction === 'Left' && (originCol - 1 >= 1)) {
      originCol = originCol - 1;
      colMax = colMax - 1;
    } else if (direction === 'Right' && (colMax + 1<= COLMAX)) {
      originCol = originCol + 1;
      colMax = colMax + 1;
    }
    for (let row = originRow; row <= rowMax; row++) {
      for (let col = originCol; col <= colMax; col++) {
        const cell = document.getElementById(`${row}-${col}`);
        // console.log('cell colored', cell);
        cell.classList = 'tetro-cell-color1';
      }
    }
    coloredCellIndexs = [originRow, originCol, rowMax, colMax];
    setBlockPosition(coloredCellIndexs);
  }

  const createObject = () => {
    let coloredCellIndexs = [];
    let rowMax = 0;
    let colMax = 0;
    const originRow = 1;
    const originCol = 1;
    const randomNum = Math.floor(Math.random()*3);
    // console.log(randomNum);
    if(randomNum === 0) {
      rowMax = 1;
      colMax = 1;
    } else if (randomNum === 1) {
      rowMax = 2;
      colMax = 1;
    } else if (randomNum === 2) {
      rowMax = 2;
      colMax = 2;
    }
    
    for (let row = originRow; row <= rowMax; row++) {
      for (let col = originCol; col <= colMax; col++) {
        const cell = document.getElementById(`${row}-${col}`);
        // console.log('cell', cell);
        cell.classList = 'tetro-cell-color1';
      }
    }
    coloredCellIndexs = [originRow, originCol, rowMax, colMax];
    console.log('coloredCellIndexs', coloredCellIndexs)
    setBlockPosition(coloredCellIndexs);
    setStarted(true);
  }
  const startGame = () => {
    console.log('start!')
  }

  const cells = [];
  for (let row = 1; row <= ROWMAX; row++) {
    for (let col = 1; col <= COLMAX; col++) {
      cells.push(<Cell key={`${row}-${col}`} row={row} col={col} index={`${row}-${col}`} />);
    }
  }
  return (
    <>
      <div id='tetroPage'>
        <div id='tetro_container' onClick={startGame} ref={containerRef}>{cells}</div>
        <div>
          <button id='my-btn' className='bt' onClick={createObject}>start</button>
          <button className='bt' onClick={() => { setTimer((prevTimer) => prevTimer + 1)}}>down</button>
          <button className='bt' onClick={() => {handleObject('Left')}}>left</button>
          <button className='bt' onClick={() => {handleObject('Right')}}>right</button>
        </div>
      </div>
    </>
  )
}
export default Tetro;