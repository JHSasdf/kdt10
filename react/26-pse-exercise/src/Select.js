
function Select (props) {
    const setData = props.setData;

    const handleInput = (e) => {
        const content = e.target.value;
        setData( (data) => {
            return {
                ...data, content};
        });
    }
    return ( 
        <>
        <label htmlFor="fruit">과일: </label>
      <select name="" id="fruit" onChange={(e) => {
        setData((data) => {
            // spread 연산자
            // data: 이전의 data state (객체)
            // ...data : 이전 값 그대로
            // fruit 값만 변경이 일어나서 fruit만 바꿔준다
            return {
                ...data, fruit: e.target.value
            };
        })
      }}>
        <option value='apple'>사과</option>
        <option value='banana'>바나나</option>
        <option value='peach'>복숭아</option>
        <option value='orange'>오렌지</option>
      </select>
      <label htmlFor="background-color">배경색: </label>
      <select name="" id="bakground-color" onChange={(e) => {
        setData((data) => {
            return {
                ...data, background: e.target.value
            };
        });
      }}>
        <option value="white">하양</option>
        <option value="black">검정</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="violet">보라</option>
        <option value="pink">분홍</option>
      </select>
      <label htmlFor="color">글자색: </label>
      <select name="" id="color" onChange={(e) => {
        // 여기 data는 data의 data 전부
        setData((data) => {
            return {
                ...data, color: e.target.value
            };
        });
      }
      }>
        <option value="white">하양</option>
        <option value="black">검정</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="violet">보라</option>
        <option value="pink">분홍</option>
      </select>
      <br />
      <label htmlFor="text">내용 : </label>
      <input
        type="text"
        id="text"
        onChange={handleInput}
        placeholder="내용을 입력하세요"
      />
      </>
     );
}

export default Select ;