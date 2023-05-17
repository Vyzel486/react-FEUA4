import React from "react";

class ClassDiv extends React.Component{
    render(){
        return <div>
            <h3>Class Div</h3>
            <p>cia bus tekstas</p>
            <button>{this.props.title}</button>
        </div>
    }
}

export default ClassDiv;