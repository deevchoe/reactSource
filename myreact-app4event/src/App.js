import React, {useState} from "react";
import Subject from "./mydir/Subject";
import Welcome from "./mydir/Func";

//const App = () => {
function App() {
  const [subject, setSubject] = useState({title:'웹문서', subtitle:'리액트 만세'});
  const [friends] = useState([
    {bun:1, irum:'홍길동', nai:33},
    {bun:2, irum:'신길동', nai:23},
  ]);// 수정함수는 필요없어서 안썼어. 배열을 줄수도 있어.

  const handleChangePage = () => {
    // friends 배열값 콘솔에 출력
    friends.forEach(friend => {
      console.log(`${friend.bun}번 ${friend.irum}님 나이는 ${friend.nai}살`)
    });

    setSubject(prevSubject => ({  // 이전 상태인 prevSubject(subject)을 받아 변환
      ...prevSubject, // 자바스크립트의 전개연산자
      title:'버튼에 의해 제목 변경'
    }));
  }

  return (
    <div className="App">
      이벤트 연습<br/>
      <Subject
        title = {subject.title}
        subtitle = {subject.subtitle}
        changePage = {handleChangePage}
      />
      {/* title, subtitle, changePage : App에서 Subject 컴포넌트로 전달되는 props */}

      <br></br>
      <Welcome
        subtitle = {subject.subtitle}
        friends = {friends}
        changePage = {handleChangePage}
      />
    </div>
  );
}

export default App;
