
import { useContext } from "react";
import Button from "./Button";
import Panel from "./Panel";
import { MyContext } from "../App";
// import { ThemeContext } from "../App";


function Form() {
    const MyContextVal = useContext(MyContext);
    console.log(MyContextVal);
    // const {theme, msg} = useContext(ThemeContext);
    // console.log('thistis,', msg)
    return ( 
        <Panel title="Welcome">
            <h1>this is {MyContextVal}</h1>
            <Button>sign up</Button>
            <Button>sign in</Button>
        </Panel>
     );
}

export default Form;