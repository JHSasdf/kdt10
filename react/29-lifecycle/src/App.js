import Exercise1 from "./Exercise1";
import LifeCycleClass from "./LifeCycleClass";
import LifeCycleFunc from "./LifeCycleFunc";

function App() {
  return (
    <div>
      {/* 클래스형 컴포넌트 라이프사이클 */}
      <LifeCycleClass></LifeCycleClass>
      <hr />
      {/* 함수형 컴포넌트 라이프사이클 */}
      <LifeCycleFunc></LifeCycleFunc>
      <hr />
      <Exercise1></Exercise1>
    </div>
  );
}

export default App;
