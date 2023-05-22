import React, { useState, useEffect } from 'react';
import { strs } from './data/blanko.js';
// import {
//   Link,
//   // useParams
// } from 'react-router-dom';
// import { useContext, Context } from '../context';
// import { v4 } from 'uuid'

function Blanko () {
  const numOfStrs = strs.length;
  const [targetStr, setTargetStr] = useState(strs[0]);
  const [incompleteStr, setIncompleteStr] = useState('');
  const [answer, setAnswer] = useState('');
  const [inputList, setInputList] = useState(['', '', '', '', '', '', '', '', '', '', '', ''])

  // let inputList = '            ';

  useEffect(() => {
    newRandomStr();
  }, []);

  function resetAllInput () {
    setInputList(['', '', '', '', '', '', '', '', '', '', '', '']);
  }

  function newRandomStr () {
    resetAllInput();
    let temp_targetStr = '';
    let temp_incompleteStr = '';
    while(true){
      const randomIndex = Math.floor(Math.random()*numOfStrs);
      if(strs[randomIndex] !== targetStr){
        temp_targetStr = strs[randomIndex];
        temp_incompleteStr = strs[randomIndex];
        break
      }
    }
    setTargetStr(temp_targetStr);

    let temp_inputIndex = [];
    while (temp_inputIndex.length < 3){
      let randomIndex = Math.floor(Math.random()*(targetStr.length));
      if(temp_targetStr[randomIndex]!== ' ' && !temp_inputIndex.includes(randomIndex)){
        temp_inputIndex.push(randomIndex);
        console.log('push', randomIndex, 'in the inputIndex')
      }
    }
    
    for( let i=0; i<12; i++) {
      for(let j=0; j<3; j++){
        if(temp_inputIndex[j] === i){
          temp_incompleteStr = temp_incompleteStr.substring(0, i) + '?' + temp_incompleteStr.substring(i + 1);
          console.log('temp', temp_incompleteStr)
        }
      }
    }
    setIncompleteStr(temp_incompleteStr);
    setAnswer(temp_incompleteStr);
  }

  function checkResult (e) {
    const inputId = e.target.id.substr(13, 14);
    console.log('inputId', inputId);
    let temp_inputList = inputList;
    temp_inputList[Number(inputId)] = e.target.value;
    setInputList(temp_inputList);
    console.log(e.target.value, targetStr[Number(inputId)])
    for( let i=0; i<12; i++) {
      if (i === Number(inputId)) {
        if (e.target.value ==='') {
          setAnswer (answer.substring(0, i) + '?' + answer.substring(i + 1));
        }else {
          setAnswer (answer.substring(0, i) + e.target.value + answer.substring(i + 1));
          if((answer.substring(0, i) + e.target.value + answer.substring(i + 1)) === targetStr) {
            let score = Number(localStorage.getItem('score'));
            score = score + 1;
            localStorage.setItem('score', score);
            setTimeout(()=>{
              alert('Correct!');
            }, 0)
          }
        }
      }
    }
      
  }

  return (
    <>
      <div id='blankoPage'>
        <div className='bigBox'>    
          <div className='smallBox'>{ incompleteStr[0] ==='?' ? <><input value={inputList[0]} id ='Blanko-input-0' maxLength={1} onChange={checkResult} type="text" /></>:targetStr[0]}</div>
          <div className='smallBox'>{ incompleteStr[1] ==='?' ? <><input value={inputList[1]} id ='Blanko-input-1' maxLength={1} onChange={checkResult} type="text" /></>:targetStr[1]}</div>
          <div className='smallBox'>{ incompleteStr[2] ==='?' ? <><input value={inputList[2]} id ='Blanko-input-2' maxLength={1} onChange={checkResult} type="text" /></>:targetStr[2]}</div>
          <div className='smallBox'>{ incompleteStr[3] ==='?' ? <><input value={inputList[3]} id ='Blanko-input-3' maxLength={1} onChange={checkResult} type="text" /></>:targetStr[3]}</div>
          <div className='smallBox'>{ incompleteStr[4] ==='?' ? <><input value={inputList[4]} id ='Blanko-input-4' maxLength={1} onChange={checkResult} type="text" /></>:targetStr[4]}</div>
          <div className='smallBox'>{ incompleteStr[5] ==='?' ? <><input value={inputList[5]} id ='Blanko-input-5' maxLength={1} onChange={checkResult} type="text" /></>:targetStr[5]}</div>
          <div className='smallBox'>{ incompleteStr[6] ==='?' ? <><input value={inputList[6]} id ='Blanko-input-6' maxLength={1} onChange={checkResult} type="text" /></>:targetStr[6]}</div>
          <div className='smallBox'>{ incompleteStr[7] ==='?' ? <><input value={inputList[7]} id ='Blanko-input-7' maxLength={1} onChange={checkResult} type="text" /></>:targetStr[7]}</div>
          <div className='smallBox'>{ incompleteStr[8] ==='?' ? <><input value={inputList[8]} id ='Blanko-input-8' maxLength={1} onChange={checkResult} type="text" /></>:targetStr[8]}</div>
          <div className='smallBox'>{ incompleteStr[9] ==='?' ? <><input value={inputList[9]} id ='Blanko-input-9'  maxLength={1} onChange={checkResult} type="text" /></>:targetStr[9]}</div>
          <div className='smallBox'>{ incompleteStr[10] ==='?' ? <><input value={inputList[10]} id ='Blanko-input-10' maxLength={1} onChange={checkResult} type="text" /></>:targetStr[10]}</div>
          <div className='smallBox'>{ incompleteStr[11] ==='?' ? <><input value={inputList[11]} id ='Blanko-input-11' maxLength={1} onChange={checkResult} type="text" /></>:targetStr[11]}</div>
        </div>
        <button className='bt' onClick={newRandomStr}>reset game</button>
        {/* t: {targetStr} <br />
        i: {incompleteStr} <br />
        a: {answer} <br /> */}
        {/* {inputMessage} */}
      </div>
    </>
  )
}
export default Blanko;