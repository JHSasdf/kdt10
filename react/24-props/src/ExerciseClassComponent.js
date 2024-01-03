import { Component } from "react";
import PropTypes from "prop-types";

class ExerciseClassComponent extends Component {
  // 클래스형 컴포넌트는 render 함수가 필수
  render() {
    const {text, valid} = this.props;
    return (
      <div>
        <p>
        {text}
        </p>
        <button onClick={valid}>콘솔 메시지</button>
      </div>
    );
  }
}

ExerciseClassComponent.defaultProps = {
    text: '이건 기본 text props입니다.'
}

ExerciseClassComponent.propTypes = {
    text: PropTypes.string.isRequired
}

export default ExerciseClassComponent;