import React, { useRef, useState } from "react";
import "./app.css";
function Exercise() {
  const [info, setInfo] = useState([]);
  const [inputUser, setInputUser] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [select, setSelect] = useState("user");
  const [inputSearchInfo, setInputSearchInfo] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);

  const writer = useRef();
  const title = useRef();

  const append = () => {
    if (!writer.current.value || writer.current.value.trim().length === 0) {
      return writer.current.focus();
    }
    if (!title.current.value || title.current.value.trim().length === 0) {
      return title.current.focus();
    }
    const NewInfo = info.concat({
      user: inputUser,
      title: inputTitle,
    });
    setInfo(NewInfo);
  };

  const handleKeyDown = (e) => {
    console.log('keyup')
    console.log(e);
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.code === "Enter") {
      append();
    }
  };
  const handleKeyDown2 = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.code === "Enter") {
      append();
    }
  };

  const search = () => {
    let filteredInfo;
    if (select === "user") {
      filteredInfo = info.filter((elem) => {
        // return elem.user.includes(inputSearchInfo);
        // 아래로 하면 if로 안걸러도 됨
        return elem[select].includes(inputSearchInfo);
      });
    } else {
      filteredInfo = info.filter((elem) => {
        return elem.title.includes(inputSearchInfo);
      });
    }
    setSearchInfo(filteredInfo);
  };

  const viewAll = () => {
    setSearchInfo(info);
  };
  return (
    <>
      <div>
        작성자 :
        <input
          type="text"
          ref={writer}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => setInputUser(e.target.value)}
        />
        제목 :
        <input
          type="text"
          ref={title}
          onKeyDown={(e) => handleKeyDown2(e)}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button onClick={append}>작성</button>
      </div>
      <select
        name=""
        id=""
        defaultValue="user"
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="user">작성자</option>
        <option value="title">제목</option>
      </select>
      <input type="text" onChange={(e) => setInputSearchInfo(e.target.value)} />
      <button onClick={search}>검색</button>
      <button onClick={viewAll}>전체</button>
      <table border={1} cellSpacing={0}>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>
        {info.map((value, idx) => {
          return (
            <tr key={value.title}>
              <td>{idx + 1}</td>
              <td>{value.title}</td>
              <td>{value.user}</td>
            </tr>
          );
        })}
      </table>

      {searchInfo.length ? "검색 결과" : "검색 결과가 없습니다"}
      {searchInfo.length >= 1 && (
        <table border={1} cellSpacing={0}>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
          {searchInfo.map((value, idx) => {
            return (
              <tr key={value.title}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.user}</td>
              </tr>
            );
          })}
        </table>
      )}
    </>
  );
}

export default Exercise;
