import React from "react";

function Gugudan() {

    return (
        <div className='App'>
            <Calc number={3}/>
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
export default Gugudan;