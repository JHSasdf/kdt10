import React from 'react';
import Studnet from './component/Student';
import TodoList from './component/TodoList';

function App() {
  const handleClick = (name: string, grade: number):void => {
    alert(`학생 이름: ${name}, 학년: ${grade}`)
  }
  return (
    <div className="App">
    {/* <Studnet name='선지훈' grade={3} subject='수학' handleClick= {handleClick} ></Studnet>      
    <Studnet name='레일라' grade={3} handleClick= {handleClick} ></Studnet>     */}
    <TodoList></TodoList>  
    </div>
  );
}

export default App;
