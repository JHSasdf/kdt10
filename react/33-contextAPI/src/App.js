import { createContext } from "react";
import UserProvider from "./context/UserProvider";
import UserProfile from "./components/UserProfile";
import Form from "./components/Form";
export const ThemeContext = createContext(null);

function App() {
  const MyContext = createContext('defaultValue');
  


  return (
    <div className="App">
      {/* UserProvider에서 value prop으로 넘겨준 값을 UserProfile에서 Consumer or UseContext 사용해서 context 값을 쓸 수 있게 됨 */}
     <UserProvider>
      {/* 여기서 UserProfile 컴포넌트와 h2태그는 이 상태로 렌더링 되는 것이 아니라 UserProvider의 children 값으로 들어가는 것임..!!! */}
      <UserProfile/>
      <h2>context</h2>
     </UserProvider>

     {/* react dev 공식홈 */}
     <ThemeContext.Provider value="dark">
      <Form></Form>
     </ThemeContext.Provider>
    </div>
  );
}


export default App;
