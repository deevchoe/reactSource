// 사번 직원명 부서명 직급
// 인원수 
import React, {useState, useEffect} from "react";

// Member 컴포넌트
const Member = ({jikwonData}) => {  // props다. Multidata가 주고 있어!!
    return(
        <tr>
            <td>{jikwonData.no}</td>
            <td>{jikwonData.name}</td>
            <td>{jikwonData.bname}</td>
            <td>{jikwonData.jik}</td>
        </tr>
    );
}

const Jikwon = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/web_react_ex/jikwonInfo.jsp", {method:'GET'})
        .then(res => {
            if(!res.ok){
                throw new Error('network response was not ok');
            }
            return res.json();
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.jikwon); // apache server의 items야.
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []); // 의존성 배열을 비워놨다. 

    // error가 나면 에러 메세지를, isLoaded가 false이면 로딩 메세지를
    // 그 외에는 items를 출력(렌더링)한다.
    if(error){
        return <div>에러 : {error.message}</div>
    }else if(!isLoaded){    // isLoaded가 false일 때
        return <div>자료 수신 중 ...</div>
    }else{
        return(
            <ul>
            <table border={1}>
            <thead>
                <tr>
                <th>사번</th><th>직원명</th><th>부서명</th><th>직급</th>
                </tr>
            </thead>
            <tbody>
                {items.map((jik, index) => (
                    <Member key={index} jikwonData={jik} /> 
                ))}
            </tbody>
        </table>

                인원수 : {items.length} 명
            </ul>

        );
    }
}


export default Jikwon;