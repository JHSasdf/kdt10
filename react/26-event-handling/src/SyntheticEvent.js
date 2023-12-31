function SyntheticEvent() {
    function syntheticEvent(e) {
        console.log('Synthetic Event!');
        console.log(e);

        // 콘솔에 기록되는 e 객체는 SynthetisEvent (합성이벤트)
        // : 리액트가 DOM이 아닌 VirtualDOM을 사용하는 것처럼 웹 브라우저의 nativeEvent가 아니라 nativeEvent를 감싼 SyntheticEvent 사용

        // onClick이나 onChange와 같은 이벤트들은 브라우저의 기본 이벤트가 아니라 React의 고유한 이벤트 객체(Synthetic Event)
        // 이벤트가 끝나면 초기화 되어 정보를 참조할 수 없음
    }

    function printInputValue(e) {
        console.log(e.target.value);
    }
    return(
        <div>
            <button onClick={syntheticEvent}>SyntheticEvent 콘솔에 찍기</button>
            <input type="text" onChange={printInputValue} />
        </div>
    );
}

export default SyntheticEvent;