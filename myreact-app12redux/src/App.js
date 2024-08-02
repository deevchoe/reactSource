import './App.css';
import React,{Component} from 'react';
import AddNumberSuper from './mydir/AddNumberSuper';
import ShowNumberSuper from './mydir/ShowNumberSuper';

class App extends Component{
  state = {number:0}
  render(){
    return (
      <div className="App">
        <h1>Main</h1>
        {/* App 소유 state 변수 number + size (AddNumberSuper가 전달한 값) */}
        {/* 
        <AddNumberSuper onClick={function(size){ // props의 이름 : onClick. 함수를 넘겨용
          this.setState({number:this.state.number + size})
        }.bind(this)}></AddNumberSuper>
        App의 number : {this.state.number}

        <ShowNumberSuper number={this.state.number}></ShowNumberSuper>{/* props의 이름 : number
         */}
        
        {/* 포함하고 있어~만 해주면 됨 */}
        <AddNumberSuper></AddNumberSuper> 
        <ShowNumberSuper></ShowNumberSuper>
      </div>
    );
  }
}

export default App;
