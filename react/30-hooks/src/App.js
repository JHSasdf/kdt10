import Form from "./Form";
import UseCallbackEx from "./UseCallbackEx";
import UseCallbackEx2 from "./UseCallbackEx2";
import UseMemoEx from "./UseMemoEx";
import UserReducerEx from "./UseReducerEx";

function App() {
  return (
    <div className="App">
      <UseMemoEx></UseMemoEx>
      <hr />
      <UseCallbackEx></UseCallbackEx>
      <hr />
      <UseCallbackEx2 postid={3}></UseCallbackEx2>
      <hr />
      <Form></Form>
      <hr />
      <UserReducerEx></UserReducerEx>
    </div>
  );
}

export default App;
