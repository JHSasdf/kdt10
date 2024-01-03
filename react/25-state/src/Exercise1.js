import React, { Component } from "react";

class Exercise1 extends Component {
    state = { number: 0 } 
    render() {
        const {number} = this.state;
        const plus2 = () => {
            this.setState({number: number+2});
        }

        const minus1 = () => {
            this.setState({number: number-1});
        }
        return (
            <div>
                <h2>{number}</h2>
                <button onClick={plus2}>+2</button>
                <button onClick={minus1}>-1</button>
            </div>
        );
    }
}
 
export default Exercise1;