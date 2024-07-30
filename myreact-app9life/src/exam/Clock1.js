//import React, {Component} from "react";
import React from "react";

class Clock1 extends React.Component{
    /*
    constructor(props){
        super(props);
    };
    */

    render() {
        return(
            <div>
                <h1>⏱️ 고장난 시계</h1>
                <h2>{new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}
export default Clock1;