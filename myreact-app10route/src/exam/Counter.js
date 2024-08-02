import React, {useState} from "react";

const Counter = () => {
    const [member, setMember] = useState(0);    // counting을 위한 state 변수

    const increase = () => {    // 이벤트용 함수
        setMember(member + 1);      // member += 1 의 의미
    }

    const decrease = () => {
        setMember(member - 1); 
    }

    return(
        <div>
            <br/><br/>
            <button onClick={increase}> 친구 추가</button>   
            &nbsp; &nbsp;
            <button onClick={decrease}> 친구 삭제</button>
            <p>친구 수는 : {member}</p>
        </div>
    );
}

export default Counter;