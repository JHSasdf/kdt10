import { useSelector, useDispatch } from "react-redux";
import { plus, minus } from "./store/counterReducer";

function App1() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="Box">
      <h1>React Redux Ex</h1>
      <h2>number : {number}</h2>
      <Box1></Box1>
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box">
        <h2>Box1</h2>
      <Box2></Box2>
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="Box">
        <h2>Box2</h2>
      <Box3></Box3>
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="Box">
        <h2>Box3</h2>
      <Box4></Box4>
    </div>
  );
};

const Box4 = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
  return (
    <div className="Box">
      <h2>box4 : {number}</h2>
      <button onClick={() => dispatch(plus())}>Plus</button>
      <button onClick={() => dispatch(minus())}>Minus</button>
    </div>
  );
};

export default App1;
