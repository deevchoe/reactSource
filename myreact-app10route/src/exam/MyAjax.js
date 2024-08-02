import React,{useState, useEffect} from "react";

const MyAjax = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // fetch를 이용해 jsp(Apache server) 자료 읽기
    // ajax 처리 성공하면 isLoaded와 items를 갱신!!
    
    // JS 기본 : SOP (Same Origin Policy, 동일 출처 정책)
    // 다른 출처의 리소스가 필요하다면 CORS 사용
    // A server <-> B server는 cors 에러가 나지 않는다.
    // CORS 처리는 package.json에 등록한다("proxy":"http://localhost:80")

    useEffect(() => {
        fetch("/web_react/abc.jsp", {method:'GET'})
        .then(res => {
            if(!res.ok){
                throw new Error('network response was not ok');
            }
            return res.json();
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.items); // apache server의 items야.
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
                {items.map(item => (
                    <li>
                        {item.code} {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }
}

export default MyAjax;