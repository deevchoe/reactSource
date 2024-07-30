import React, {useState} from "react";
import Child from './mydir/Child';

function App() {    // 부모
  // App 컴포넌트(함수)가 호출될 때 함수 내의 내용을 차례대로 수행(렌더링)
  // 리액트는 부모 컴포넌트가 렌더링될 때 자식 컴포넌트 또한 렌더링 된다.
  // 성능 최적화를 목적으로 컴포넌트에서 필요한 상황에서만 자식 컴포넌트가 리렌더링에 참여할 수 있도록 React.memo 함수를 제공한다.
  
  const [fatherAge, setFatherAge] = useState(34);
  const [childAge, setChildAge] = useState(3);

  const changeFatherAge = () => {  // 아빠나이 변경 이벤트 핸들러
    setFatherAge(fatherAge + 1);  // state니까 변경 가능. props는 변경 안된다 했다~~
  }
  
  const changeChildAge = () => {  // 자녀 나이 변경 이벤트 핸들러
    setChildAge(childAge + 1);
  }

  console.log('아빠 나이가 변경됨 - 렌더링');

  const boxstyle = {border:'2px solid', padding:'10px'} // 2px에 실선
  
  return (
    <div style={boxstyle}>
      <h2>🥸 아빠(신기루님)</h2>
      <span>나이 : {fatherAge}</span>&nbsp;&nbsp;
      <button onClick={changeFatherAge}>아빠 나이 변경</button> {/* 클릭 이벤트가 발생하면 changeFatherAge 이벤트 핸들러를 만나게 할거야~~ */}
      
      <hr/>
      <Child irum={'신통해'} nai={childAge} /> {/* 이게 바로 props.   파라미터 2개~ */}
      <button onClick={changeChildAge}>자녀 나이 변경</button>
    </div>
  );
}

export default App;
