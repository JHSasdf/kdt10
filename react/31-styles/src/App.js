import CssModuleComponent from './CssModuleComponent';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponent type={'new-style'} />

      <h2>SASS</h2>
      <SassComponent />
      <hr />
      <Exercise1></Exercise1>
      <hr />
      <Exercise2></Exercise2>
      <hr />
      <StyledComponent></StyledComponent>
    </div>
  );
}

export default App;
