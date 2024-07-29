/* eslint-disable */

import './App.css';
import React, { useState } from 'react';  // useState hook을 사용할거야ㅏ

function App() {
  // 일반 데이터
  let irum = '지연의 JSX 사용법 : 일반 데이터' // state 아니야! 일반 데이터야!!
  
  // state는 변수. const, let 등으로 선언한 변수와 달리 
  // 값이 변하면 관련 있는 컴포넌트들이 재렌더링 된다.
  // state 데이터
  let [title, setTitleFunc] = useState('자바스크립트');   // 문자열을 기억해요
  let [title2, setTitleFunc2] = useState(['리액트', '뷰']); // 배열 자료를 기억합니다~
  
  // 이벤트 처리 함수 1
  function dataUpdate(){
    //let newArr = [...title];  // 전개 연산자에 의해 문자열이 낱개 문자로 분리되어 배열로 복사된다.
    //console.log(newArr);
    title = 'React 멋져~^^';
    setTitleFunc(title);  // title state는 setJemokFunc 함수로 값을 수정한다.
    console.log(title);
  }

  function dataUpdate2(){
    let newArr = [...title2];   // 배열의 일부 수정을 위해 전개 연산자로 복사
    console.log(newArr);
    newArr[1] = "뷰 화이팅";  // newArr[1] 값 변경
    setTitleFunc2(newArr);    // title2 값을 변경하기 위해 setTitleFunc2 함수 사용
  }
  
// 이벤트 처리 2
let [count, setCount] = useState(0);




  return (
    <div className="App">
      <div className='pink_bar'>
        <h1>리액트 state 이해</h1>
      </div>
      
      <div className='list'>
        <h3>{title}</h3>
        <span>{irum}</span><br/>
        <p>state 확인</p>
        <button onClick={dataUpdate}>title 값 변경</button>
        <hr/>
      </div>

      <div className='list'>
        <h3>title2[0] : {title2[0]}</h3>
        <h3>title2[1] : {title2[1]}</h3><br/>
        <p>state 확인</p>
        <button onClick={dataUpdate2}>title2 값 변경</button>
        <hr/>
      </div>

      <div>
        이모티콘 클릭 : <span onClick={
          () => {setCount(count + 1)}}>🪅🧸🪅🧸</span>{count}번 클릭
      </div>
    </div>
  );
}

export default App;
