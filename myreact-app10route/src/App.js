import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MyTest from "./exam/test";
import HiAbout from "./exam/About";
import Counter from "./exam/Counter";
import Input1 from "./exam/Input1";
import Input2 from "./exam/Input2.js";
import Multidata from "./exam/Multidata";
import MyAjax from "./exam/MyAjax.js";

function App() {
  return (
    <Router> {/* BrouserRouter를 쓸거야!! */}
    <div className="App">
      <h2>라우트 연습용 메인 화면</h2>
      <MyTest />
      
      <hr/>
      {/* 메뉴 작성 : 라우팅 연습 */}
      <nav>
        {/* Link는 a 태그로 전환된다 : 요청명 개념으로 이해하면 됨 */}
        <Link to="/"> Test 화면 </Link> | 
        <Link to="/about"> About 보기 </Link> | 
        <Link to="/count"> 친구추가 삭제 </Link> | 
        <Link to="/input1"> 자료 입력1 </Link> |
        <Link to="/input2"> 자료 입력2 </Link> |
        <Link to="/multi"> 배열자료 </Link> |
        <Link to="/ajax"> 🍎Ajax 요청🍏</Link>
      </nav>

      <Routes>
        {/* 컴포넌트에서 동적 라우팅 구현 가능 */}
        <Route path="/" element={<MyTest/>}></Route> 
        <Route path="/about" element={<HiAbout/>}></Route> 
        <Route path="/count" element={<Counter/>}></Route> 
        <Route path="/input1" element={<Input1/>}></Route> 
        <Route path="/input2" element={<Input2/>}></Route> 
        <Route path="/multi" element={<Multidata/>}></Route> 
        <Route path="/ajax" element={<MyAjax/>}></Route> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
