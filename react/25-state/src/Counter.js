import React, { Component } from 'react';

class Counter extends Component {
    state = {
        // number 초기값: 0 
        number: 0
     } 
    render() { 
        // state 데이터는 this.state로 접근 가능 = this.state.number
        const { number } = this.state;
        const thi = this;
        return (
            <div>
                <h1>CounterClass {number}</h1>
                {/* this.setState(): state 값을 바꾸는 함수 */}
                {/* state 값을 직접 변경 불가능 */}
                <button onClick={function () {
                    thi.setState({number: number+1})
                    // 그냥 function을 만들면 this가 해당 함수의 this가 된다.
                    // 그래서 method binding을 하던가 화살표 함수로 만들어서 this가 화살표 함수가 아닌 가장 가까운 함수의 this가 되도록 해야한다.
                    // 이건 야매로 한것.
                    }}>
                    +1
                </button>
            </div>
        );
    }
}
 
export default Counter ;