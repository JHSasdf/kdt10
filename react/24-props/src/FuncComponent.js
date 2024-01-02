import PropTypes from 'prop-types';
// prop-types 라이브러리를 PropTypes 이름으로 import

// function FuncComponent(props) {
function FuncComponent({name}) {
    // const {name} = props;
    return (
        <div>
            <h1>Hi there!</h1>
            <p>새로운 컴포넌트의 이름은 <b>{name}</b></p>
            {/* <p>새로운 컴포넌트의 이름은 <b>{props.name}</b></p> */}
        </div>
    )
}

FuncComponent.defaultProps = {
    name: '홍길동'
}

FuncComponent.propTypes = {
    name: PropTypes.string
}

export default FuncComponent;