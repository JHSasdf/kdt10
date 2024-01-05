import React, { Component } from "react";

class RefClass1 extends Component {
  // 클래스형 컴포넌트 - 콜백함수를 이용한 ref

  handleFocus = () => {
    console.log(this); // RefClass1 컴포넌트
    this.myInput.focus();
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>
        {/* 만들어진 변수 myInput 해당 요소의 ref prop에 넣어주면 ref설정 완료 */}
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button ref={(ref) => (this.afaf = ref)} onClick={this.handleFocus}>
          focus
        </button>
        <hr />
      </>
    );
  }
}

export default RefClass1;
