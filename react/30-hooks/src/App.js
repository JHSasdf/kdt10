import UseCallbackEx from "./UseCallbackEx";
import UseCallbackEx2 from "./UseCallbackEx2";
import UseMemoEx from "./UseMemoEx";

function App() {
  return (
    <div className="App">
      <UseMemoEx></UseMemoEx>
      <hr />
      <UseCallbackEx></UseCallbackEx>
      <hr />
      <UseCallbackEx2 postid={9}></UseCallbackEx2>
    </div>
  );
}

export default App;
