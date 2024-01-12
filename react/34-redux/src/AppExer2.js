import { useSelector } from "react-redux";
import Box1 from './component/Box1';
function AppExer2() {
    const state = useSelector((state) => state.isVisible.boolean);
    return ( <div>
        <h1>React Redux Ex</h1>
        <h2>isVisible 값은 {state? "참": "거짓"}이다. </h2>
        <Box1></Box1>
    </div> );
}

export default AppExer2;