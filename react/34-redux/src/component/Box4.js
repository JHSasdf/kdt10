import { useSelector, useDispatch } from "react-redux";
import { plus, minus} from '../store/counterReducerExer';

function Box4() {
    // const number = useSelector((state) => state.number);
    const state = useSelector((state) => state.isVisible.boolean);
    const disPatch = useDispatch();
    const realState = useSelector((state) => state);
    console.log(realState);

  return (
    <div className="Box">
      {/* <h2>box4 : {number}</h2> */}
      {/* <button onClick={() => disPatch(plus())}>Plus</button>
      <button onClick={() => disPatch(minus())}>Minus</button> */}
      <h2>box4: isvisible값은 {state ? "참" : "거짓"}이다</h2>
      {/* 아래의 타입은 슬래쉬 안해줘도 되지만 스토어가 많은 경우 겹칠 수 있기 때문에 이렇게 만드는 것. */}
      <button onClick={() => disPatch({type: 'isVisible/change'})}>change</button>
    </div>
  );
}

export default Box4;
