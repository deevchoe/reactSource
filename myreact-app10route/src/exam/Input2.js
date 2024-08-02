import React, {useState} from "react";

const Input2 = () => {
    const [params, setParams] = useState({
        name:'',
        age:'',
        addr:''
    });

    const {name, age, addr} = params;   // params가 이름, 나이, 주소를 갖고 있어..?

    const changeFunc = (e) => {
        const value = e.target.value;   // 이름이 넘어올 수도 나이가 넘어올수도 주소가 넘어올수도
        const id = e.target.id;

        setParams({     // 수정하고싶어용
            ...params,// 쪼개져서 복사되자나 
            [id]:value  // 고유값 걸어줘
        })
    }

    return(
        <div>
            <br/>
            <div>
                <label for="name">이름 : </label>
                <input type="text" value={name} id="name" onChange={changeFunc} />
            </div>
            <div>
                <label for="age">나이 : </label>
                <input type="text" value={age} id="age" onChange={changeFunc} />
            </div>
            <div>
                <label for="addr">주소 : </label>
                <input type="text" value={addr} id="addr" onChange={changeFunc} />
            </div>
            <br/>
            <h3>처리 결과</h3>
            <table border={1}>
                <td>이름은 {name}</td>
                <td>나이는 {age}</td>
                <td>주소는 {addr}</td>
            </table>
        </div>
    );
};

export default Input2;