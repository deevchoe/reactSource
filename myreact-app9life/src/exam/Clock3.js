import { useState, useEffect } from "react";

const Clock3 = () => {
    // useSate로 state를 초기화
    const [date, setDate] = useState(new Date());

    // useEffect를 사용하면 내부적으로 생명 주기 메소드가 수행된다.
    useEffect(() => {
        // 클래스의 componentDidMount()를 아래처럼 기술
        const timerID = setInterval(() => showSigan(), 1000);   // 클래스에서 사용한 componentDidMount()를 함수에서는 이렇게
 
        // 클래스의 componentWillUnmount를 아래처럼 기술
        return () => {
            clearInterval(timerID);
        }

    }, []); // useEffent에서는 배열을 꼭 써주자.

    const showSigan= () => {
        setDate(new Date());        // 자바 스크립트 객체 생성
    }

    return(
        <div>
            <h1>⏱️ 시계는 Watch!</h1>
            <h2>지금은 {new Date().toLocaleTimeString()}</h2>
            <h2>현재 시간은 {date.toLocaleTimeString()}</h2> 
        </div>
    );
}

export default Clock3;