import React, {memo} from "react";

const boxstyle = {border:'1px dotted pink', padding:'20px'}

//function Child({irum, nai}){...}
const Child = ({irum, nai}) => {    // 매개변수 2개 달고 함수로 들어가~     // 부모로부터 받을거니까 props다.
    console.log('와우! 자녀 나이 바뀜(렌더링)');

    return(
        <div style={boxstyle}>
            <h3>🤓자녀1</h3>
            <p>이름 : 신통한</p>
            <p>나이 5살</p>
            <h3>🤓자녀2</h3>
            <p>이름 : {irum}</p>
            <p>나이 {nai}살</p>
        </div>
    );
}

//export default Child;
export default memo(Child);     // 반환 컴포넌트를 memo 함수로 감싸주면 memo 기능이 활성화된다.