import { useState } from "react";

function MyForm(){
    const [formData, setFormData] = useState({
        irum:'',
        nai:'',
        menu:'떡볶이'
    })

    const dataChange = (e) => { // 파라미터로 e를 준 이벤트 핸들러
        const name = e.target.name; // form 태그 내의 name
        const value = e.target.value;
        setFormData({   // formdata를 이용해서 값을 수정할 생각
            ...formData,
            [name]:value
        });
    }

    const dataSubmit = (e) => {
        e.preventDefault(); // submit 고유 기능 해제.
        const {nai} = formData; // formData 객체에서 nai를 추출해 nai 변수에 치환

        if(!Number(nai) || isNaN(Number(nai))){     // 나이 입력 자료 검사
            alert('나이는 숫자로 입력하시오');
        }else{
            alert('처리 성공');
        }
    }

    return(
        <>
        <h3>결과 : {formData.irum}, 넌 {formData.nai}살! 선택한 음식은 {formData.menu}</h3>
        <form onSubmit={dataSubmit}>
            이름 입력 : <input type="text" name="irum" onChange={dataChange} /><br/>
            나이 입력 : <input type="text" name="nai" onChange={dataChange} /><br/>
            야식 메뉴 : 
            <select name="menu" value={formData.menu} onChange={dataChange}>
                <option value="치킨">치킨</option>
                <option value="떡볶이">떡볶이</option>
                <option value="닭발">닭발</option>
            </select>
            <br/><br/>
            <button type="submit">전송</button>
        </form>
        </>
    )
}

export default MyForm;