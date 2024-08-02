import React, {useState} from "react";

function Multab() {
    const [number, setNumber] = useState(0);

    const handleChange = (e) => {
        e.preventDefault();
        const inputNumber = Number(e.target.elements.num.value);
        if (!isNaN(inputNumber)) {
            setNumber(inputNumber);
        } else {
            alert('숫자를 입력해주세요.');
        }
    };

    return (
        <div className='App'>
          <br/>
          <form onSubmit={handleChange}>
            단 입력 : <input type="text" id="num"></input>
            <button type="submit">확인</button>
          </form>
            <Calc number={number}/>
        </div>

    );
  }

  const Calc = ({number}) => {
    const mul = [1,2,3,4,5,6,7,8,9];
    return (
        <div>
            {mul.map((n) => (
                <p>
                    {number} X {n} = {number*n}
                </p>
            ))}
        </div>
    );
}
export default Multab;