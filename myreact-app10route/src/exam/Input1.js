import React, {useState} from "react";

const Input1 = () => {
    const [txtValue, setTxtValue] = useState('');

    const changeFunc = (e) => {
        setTxtValue(e.target.value);
    }
    
    return(
        <div>
            <input type="text" value={txtValue} onChange={changeFunc} /> {/* 키보드 누르는 순간 바로 벌어져 */}
            <br/>
            입력값 : {txtValue}
        </div>
    );
};

export default Input1;