import React from "react";
import MyTest from "./exam/test";
import HiAbout from "./exam/About";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router> {/* BrouserRouter를 쓸거야!! */}
    <div className="App">
      <h2>라우트 연습용 메인 화면</h2>
      <MyTest />
      
      <hr/>
      {/* 메뉴 작성 : 라우팅 연습 */}
      <nav>
        {/* Link는 a 태그로 전환된다 : 요청명 개념으로 이해하면 됨*/}
        <Link to="/">Test 화면</Link> |
        <Link to="/about">About 보기</Link>
      </nav>

      <Routes>
        {/* 컴포넌트에서 동적 라우팅 구현 가능 */}
        <Route path="/" element={<MyTest/>}></Route> 
        <Route path="/about" element={<HiAbout/>}></Route> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
