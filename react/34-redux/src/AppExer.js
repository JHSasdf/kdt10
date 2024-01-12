import { Provider } from "react-redux";
import counterReducer from "./store/counterReducerExer";
import Box1 from "./component/Box1";
import { createStore } from "redux";
import './styles/Box.css'

function AppExer() {
    const store = createStore(counterReducer);
    return ( <>
    <Provider store={store} >
        <Box1></Box1>
    </Provider>
    </> );
}

export default AppExer;