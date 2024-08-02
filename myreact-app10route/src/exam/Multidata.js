import React from "react";

// Member 컴포넌트
const Member = ({memberData}) => {  // props다. Multidata가 주고 있어!!
    return(
        <tr>
            <td>{memberData.name}</td>
            <td>{memberData.tel}</td>
        </tr>
    );
}

// 메인 컴포넌트
const Multidata = () => {
    const members = [ // json 타입의 데이터를 갖고 있는 배열
        {name:'관우', tel:'111-1111'},
        {name:'장비', tel:'111-2222'},
        {name:'유비', tel:'111-3333'},
    ];

    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>이름</th><th>전화</th>
                </tr>
            </thead>
            <tbody>
                {/* members라는 애가 map을 통해 하나씩 빠져나와 mem에 담겨       행단위로 돌릴거야. map 써주면 되겠지! */}
                {/* 배열 렌더링 시 각 요소에 고유 key를 추가 */}
                {/*  {name:'관우', tel:'111-1111'},  map 함수에 의해 차례대로 들어올거야. */}
                {members.map((mem, index) => (
                    <Member key={index} memberData={mem} /> 
                ))}
            </tbody>
        </table>
    );
}

export default Multidata;