import React, { useEffect, useRef } from 'react';
// import {
//   Link,
//   // useParams
// } from 'react-router-dom';
// import { useContext, Context } from '../context';
// import { v4 } from 'uuid'
import part1 from './data/shrek/1.png';
import part2 from './data/shrek/2.png';
import part3 from './data/shrek/3.png';
import part4 from './data/shrek/4.png';
import part5 from './data/shrek/5.png';
import part6 from './data/shrek/6.png';
import part7 from './data/shrek/7.png';
import part8 from './data/shrek/8.png';

function Slido () {
  const image_1_Ref = useRef(),
    image_2_Ref = useRef(),
    image_3_Ref = useRef(),
    image_4_Ref = useRef(),
    image_5_Ref = useRef(),
    image_6_Ref = useRef(),
    image_7_Ref = useRef(),
    image_8_Ref = useRef(),
    image_9_Ref = useRef();
  
  useEffect(() => {
    resetImage();
  },[]);
  
  const checkPositionList = (targetNum) => {
    if (targetNum === 1){
      return [2, 4];
    } else if(targetNum === 2) {
      return [1, 3, 5];
    } else if(targetNum === 3) {
      return [2, 6];
    } else if(targetNum === 4) {
      return [1, 5, 7];
    } else if(targetNum === 5) {
      return [2, 4, 6, 8];
    } else if(targetNum === 6) {
      return [3, 5, 9];
    } else if(targetNum === 7) {
      return [4, 8];
    } else if(targetNum === 8) {
      return [5, 7, 9];
    } else if(targetNum === 9) {
      return [6, 8];
    }
  }

  const getEmptyPosition = (List) => {
    // console.log(image_1_Ref.current.src);
    // console.log(image_2_Ref.current.src);
    // console.log(image_3_Ref.current.src);
    // console.log(image_4_Ref.current.src);
    // console.log(image_5_Ref.current.src);
    // console.log(image_6_Ref.current.src);
    // console.log(image_7_Ref.current.src);
    // console.log(image_8_Ref.current.src);
    // console.log(image_9_Ref.current.src);

    for( let i = 0; i < List.length; i++) {
      // console.log('checking position:', List[i])
      if (List[i] === 1 && image_1_Ref.current.src === 'http://localhost:3000/slido') {
        return image_1_Ref;
      } else if (List[i] === 2 && image_2_Ref.current.src === 'http://localhost:3000/slido') {
        return image_2_Ref;
      } else if (List[i] === 3 && image_3_Ref.current.src === 'http://localhost:3000/slido') {
        return image_3_Ref;
      } else if (List[i] === 4 && image_4_Ref.current.src === 'http://localhost:3000/slido') {
        return image_4_Ref;
      } else if (List[i] === 5 && image_5_Ref.current.src === 'http://localhost:3000/slido') {
        return image_5_Ref;
      } else if (List[i] === 6 && image_6_Ref.current.src === 'http://localhost:3000/slido') {
        return image_6_Ref;
      } else if (List[i] === 7 && image_7_Ref.current.src === 'http://localhost:3000/slido') {
        return image_7_Ref;
      } else if (List[i] === 8 && image_8_Ref.current.src === 'http://localhost:3000/slido') {
        return image_8_Ref;
      } else if (List[i] === 9 && image_9_Ref.current.src === 'http://localhost:3000/slido') {
        return image_9_Ref;
      }
    }
    return null;   
  }

  const swapPosition = (e) => {
    // console.log(e.target.id.substr(1,2));
    // console.log('clicked image src is :', e.target.src)
    const checkList = checkPositionList(Number(e.target.id.substr(1,2)));
    // console.log('Check list is:', checkList)
    const targetPosition = getEmptyPosition(checkList);
    // console.log('the target position is :', targetPosition)
    // console.log('the target position s src is  :', targetPosition.current.src)
    if (targetPosition !== null) {
      targetPosition.current.src = e.target.src;
      e.target.src = '';
      checkAnswer();
    }

  }

  function shuffle(list) {
    let ctr = list.length,
      temp,
      index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = list[ctr];
      list[ctr] = list[index];
      list[index] = temp;
    }
    return list;
  }

  const resetImage = () => {
    // console.log(image_1_Ref.current);
    let imageList =[part1, part2, part3, part4, part5, part6, part7, part8, '']
    imageList = shuffle(imageList);
    image_1_Ref.current.src = imageList[0];
    image_2_Ref.current.src = imageList[1];
    image_3_Ref.current.src = imageList[2];
    image_4_Ref.current.src = imageList[3];
    image_5_Ref.current.src = imageList[4];
    image_6_Ref.current.src = imageList[5];
    image_7_Ref.current.src = imageList[6];
    image_8_Ref.current.src = imageList[7];
    image_9_Ref.current.src = imageList[8];

  }
  const solveIt = () => {
    let imageList =[part1, part2, part3, part4, part5, part6, part7, part8, '']
    image_1_Ref.current.src = imageList[0];
    image_2_Ref.current.src = imageList[1];
    image_3_Ref.current.src = imageList[2];
    image_4_Ref.current.src = imageList[3];
    image_5_Ref.current.src = imageList[4];
    image_6_Ref.current.src = imageList[5];
    image_7_Ref.current.src = imageList[6];
    image_8_Ref.current.src = imageList[7];
    image_9_Ref.current.src = imageList[8];

  }

  const checkAnswer = () => {
    const resultList = [part1, part2, part3, part4, part5, part6, part7, part8]
    if (image_1_Ref.current.src.substr(21,image_1_Ref.current.src.length) === resultList[0] &&
      image_2_Ref.current.src.substr(21,image_2_Ref.current.src.length) === resultList[1] &&
      image_3_Ref.current.src.substr(21,image_3_Ref.current.src.length) === resultList[2] &&
      image_4_Ref.current.src.substr(21,image_4_Ref.current.src.length) === resultList[3] &&
      image_5_Ref.current.src.substr(21,image_5_Ref.current.src.length) === resultList[4] &&
      image_6_Ref.current.src.substr(21,image_6_Ref.current.src.length) === resultList[5] &&
      image_7_Ref.current.src.substr(21,image_7_Ref.current.src.length) === resultList[6] &&
      image_8_Ref.current.src.substr(21,image_8_Ref.current.src.length) === resultList[7]) {
        alert('Correct!');
        let score = Number(localStorage.getItem('score'));
        score = score + 1;
        localStorage.setItem('score', score);
      } else {
        console.log('No')
      }
  }

  return (
    <>
      <div id='slidoPage'>
        <div id='container'>
          <div className='cell'><img width={148} id='c1' src='' ref={image_1_Ref} onClick={swapPosition} ></img></div>
          <div className='cell'><img width={148} id ='c2' src='' ref={image_2_Ref} onClick={swapPosition}></img></div>
          <div className='cell'><img width={148} id ='c3' src='' ref={image_3_Ref} onClick={swapPosition}></img></div>
          <div className='cell'><img width={148} id ='c4' src='' ref={image_4_Ref} onClick={swapPosition}></img></div>
          <div className='cell'><img width={148} id ='c5' src='' ref={image_5_Ref} onClick={swapPosition}></img></div>
          <div className='cell'><img width={148} id ='c6' src='' ref={image_6_Ref} onClick={swapPosition}></img></div>
          <div className='cell'><img width={148} id ='c7' src='' ref={image_7_Ref} onClick={swapPosition}></img></div>
          <div className='cell'><img width={148} id ='c8' src='' ref={image_8_Ref} onClick={swapPosition}></img></div>
          <div className='cell'><img width={148} id ='c9' src='' ref={image_9_Ref} onClick={swapPosition}></img></div>
        </div>
        <div>
          <button className='bt' onClick={solveIt}>Solve</button>
          <button className='bt' onClick={resetImage}>Reset</button>
          <button className='bt' onClick={checkAnswer}>check</button>
        </div>
      </div>
    </>
  )
}
export default Slido;