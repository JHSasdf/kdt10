import React, { Component } from 'react';

class HandlerEx extends Component {
    state = { 
        sentence: 'Hello World!'
     } 
    
     changeSentence() {
        this.setState({sentence: 'Bye World!'});
     }

     getSentence() {
        return this.state.sentence;
     }

    render() { 
        return (
            <div>
                <h2>{this.getSentence()}</h2>
                <button onClick={this.changeSentence.bind(this)}>state 변경</button>
            </div>
        );
    }
}
 
export default HandlerEx;