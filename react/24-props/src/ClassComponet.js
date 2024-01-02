import { Component } from "react";
import { PropTypes } from "prop-types";
// import PropTypes from 'prop-types'; 와 동일하다.
// prop-types 라이브러리를 PropTypes 이름으로 import
// 라이브러리 안에 PropTypes라는 값도 있고, default 값도 PropTypes로 되어있기 때문에

class ClassComponent extends Component {
  // 클래스형 컴포넌트는 render 함수가 필수
  render() {
    const {name} = this.props;
    return (
      <div>
        <p>
          새로운 컴포넌트의 이름은 <b>{name}</b>
          <br />
          새로운 컴포넌트의 이름은 <b>{this.props.name}</b>
        </p>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
    name: 'coding'
}

ClassComponent.propTypes = {
    name: PropTypes.number
}

export default ClassComponent;