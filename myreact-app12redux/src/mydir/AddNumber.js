import React, {Component} from "react";
import store from '../store';

export default class AddNumber extends Component{
    state = {size:1}

    render(){
        return(
            <div>
                <h1>Add Number</h1>
                {/* + 버튼 클릭 시 size 값이 상위 컴포넌트로 전달될 수 있게 onClick을 구현 
                    props로 전달받은 onClick 함수를 호출하는데 현재 컴포넌트의 state인 size 값을 전달한다.
                    onClick 함수는 AddNumberSuper에서 작성해 준다.
                */}
                {/* 
                <input type="button" value="+"
                    onClick={function(){
                        this.props.onClick(this.state.size) // 여기서 onClick은 얘의 상위 컴포넌트의 onClick임. 값을 넘겨주기 위해 불렀어. size를 들고가. 부모의 온클릭 메소드를 호출. + 버튼을 누르면 괄호 안의 size 값이 상위 컴포넌트로 갈 수 있도록 onClick을 걸어줌
                    }.bind(this)}></input>
                */}5

                {/* Redux 사용 */}
                <input type="button" value="+"
                    onClick={function(){// 컴포넌트가 액션에 전달할땐 디스패쳐해줘야해
                        store.dispatch({type:'INCREMENT', size:this.state.size}) // 이렇게해주면 store의 size가 담긴다? 바뀐다?
                  }.bind(this)}></input>

                <input type="text" value={this.state.size}
                    onChange={function(e){
                        this.setState({size:Number(e.target.value)});
                    }.bind(this)}></input>{/*현재 클래스에 있는데 걔 이름이 뭐야? size야 */}
            </div>
        );
    }
}