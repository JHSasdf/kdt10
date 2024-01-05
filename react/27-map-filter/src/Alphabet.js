import { useState } from "react";

function Alpahbet() {
  const [alpahbet, setAlphabet] = useState(["b", "a", "n", "a", "n", "a"]);
  const [inputAlpha, setInputAlpha] = useState("");
  const [alphabet2, setAlphabet2] = useState([
    {
      id: 1,
      alpha: "a",
    },
    {
      id: 2,
      alpha: "p",
    },
    {
      id: 3,
      alpha: "p",
    },
    {
      id: 4,
      alpha: "l",
    },
    {
      id: 5,
      alpha: "e",
    },
  ]);
  
    const addAlpha = (e) => {
      const newAlpha = alphabet2.concat({
        id: alphabet2.length + 1,
        alpha: inputAlpha,
      });
      setAlphabet2(newAlpha);
      setInputAlpha("");
    };

  const addUser = (e) => {
    if (inputUser.name.trim().length <= 0 || inputUser.email.trim().length <= 0) {
        return;
    }
    const newUsers = users.concat({
      name: inputUser.name,
      email: inputUser.email,
    });
    setUsers(newUsers);
    setInputUser(
      {
        name: "",
        email: "",
      }
    );
  };

  const [users, setUsers] = useState([
    {
      name: "코디",
      email: "codi@gmail.com",
    },
    { name: "선지훈", email: "sgh4760@naver.com" },
  ]);
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
  });

  const handleKeyDown = (e) => {
    // 한국어 버그 픽스
    console.log(e);
    if (e.isComposing) {
        return;
    }
    if(e.code === 'Enter') {
        addUser();
    } 
  }

  const remove = (e, value) => {
    const removedItems = users.filter( (user) => {
        return user.name !== value.name;
    })
    setUsers(removedItems);
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setInputUser((data) => {
              return {
                ...data,
                name: e.target.value,
              };
            });
          }}
        />{" "}
        <input
          type="text"
          placeholder="email"
          onKeyUp={(e) => {
            // bugfix : IME 문제 해결 (한글 마지막 한글자가 더 나옴)
            handleKeyDown(e);
          }}
          onChange={(e) => {
            setInputUser((data) => {
              return {
                ...data,
                email: e.target.value,
              };
            });
          }}
        />
        <br />
        <button onClick={addUser}>등록</button>
      </div>
      <ul>
        {users.map((value, idx) => {
          return (
            <li key={value.email} onDoubleClick={ (e) => {
                remove(e, value);
            }}>
              {value.name} : {value.email}
            </li>
          );
        })}
      </ul>
      <hr />
      <ol>
        <input
          type="text"
          placeholder="알파벳 입력"
          onChange={(e) => {
            setInputAlpha(e.target.value);
          }}
        />
        <button onClick={addAlpha}>Add</button>
        {/* map */}
        {/* {alpahbet.map((value, idx) => {
            return (<li key={idx}> {value}</li>);
        })} */}

        {/* 한줄일 때 return과 {생략 가능} */}
        {/* return과 {}생략한 구문 */}
        {alpahbet.map((value, idx) => (
          <li key={idx}> {value}</li>
        ))}
      </ol>
      <ol>
        {alphabet2.map((value) => {
          return <li key={value.id}>{value.alpha} </li>;
        })}
      </ol>
      <hr />
      {/* 단축 평가 */}
      {inputAlpha.length === 0 && <span>알파벳을 입력해주세요</span>}
      {/* or의 경우 왼쪽이 거짓이면 오른쪽도 봐야해서 이렇게 됨. */}
      {null || <span>정의된 값이 없어요</span>}
    </>
  );
}

export default Alpahbet;
