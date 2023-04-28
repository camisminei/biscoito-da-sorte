import React, { Component } from "react";

class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.actionbtn}>Abrir Biscoito</button>
            </div>
        )
    }
}

export default Button;