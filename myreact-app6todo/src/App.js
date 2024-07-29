import React,{useState} from "react";

function TodoList({items}){   // 할 일 목록 출력용 컴포넌트.
  return(
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);  // text가 수정이 되겠지!!
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // 원래의 기능을 죽이고
    if(text.length === 0){
      return; // 자료 입력 안했으면 작업 안할거야
    }

    const newItems = {
      text:text,
      id:Date.now(),  // 구분자로 쓸만한 녀석 줘..
    }

    setItems((prevItems) => [...prevItems, newItems]);
    setText('');    // 입력한 값은 깨끗하게 지울게
  }

  return (
    <div className="App">
      <h3>오늘 할 일!</h3>
      <TodoList items={items} />  {/* 컴포넌트를 추가했다. */}
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">뭐 할건데?</label>
        <input id="todo" onChange={handleChange} value={text} />
        &nbsp;&nbsp;
        <button>클릭 #{items.length + 1}</button> {/* length는 0부터 출발하니까 + 1 */}
      </form>
    </div>
  );
}

export default App;
