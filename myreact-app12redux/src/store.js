import { legacy_createStore as createStore } from "redux";
// 아규먼트2 개: reducer 함수 : function(state, action) / 두번째 인자 : 
// 리듀서함수 : 애플리케이션 상태를 변환하는 함수 : A 상태 -> B 상태  (store에 들어있는 값에 대해서)
// state와 action을 전달받아 상태를 변환 후 반환
// reducer가 하는 일
// 하는 일 1) action 타입 분석
// 하는 일 2) 이전 상태를 다음 상태로 교체
// 하는 일 3) 다음 상태 반환

// createStoer(리듀서함수) store에 접근할 수 있는건 reducer밖에 없으니깐
export default createStore(function(state, action){     // 첫번째 파라미터 function(state, action){ ... }
    // state : 데이터
    // action : 데이터에 가해지는 행위
    if(state === undefined){
        return {number:0} // number 초기화
    }
    if(action.type === 'INCREMENT'){
        return {...state, number:state.number + action.size}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // 두번째 파라미터 : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// createScore 두번째 매개변수는 REDUX_DEVTOOLS를 사용하기 위한 지정값이다.