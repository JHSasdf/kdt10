import { UserContext } from "./UserContext";
import { useState } from "react";
// children: props에서 나온 props에 모든 것을 받는 것
function UserProvider({children}) {
    // props 객체 형태의 children을 인자로 받아서 하위 요소로 삽입

    // defaultUser로 설정한 값 (name, setName)
    // 이름 변경할 수 있게 useState 사용
    console.log('createContent',UserContext)

    const [name, setName] = useState(UserContext._currentValue);

    return ( <>
    <UserContext.Provider value={{name, setName}}> {children} </UserContext.Provider>
    
    </> );
}

export default UserProvider;