import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SyntheticEvent from './SyntheticEvent';
import HandlerEx from './components/ex/HandlerEx';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';

function App() {
  return (
    <div className="App">
      <SyntheticEvent></SyntheticEvent>
      <ClassBind></ClassBind>
      <hr />
      <Counter></Counter>
      <hr />
      <HandlerEx></HandlerEx>
      <hr />
      <Exercise2></Exercise2>
      <hr />
      <Exercise3></Exercise3>
    </div>
  );
}

export default App;
