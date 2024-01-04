import React, { useState } from "react";
import "./app.css";
function Exercise() {
  const [info, setInfo] = useState([]);
  const [inputUser, setInputUser] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [select, setSelect] = useState("user");
  const [inputSearchInfo, setInputSearchInfo] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);

  const append = () => {
    const NewInfo = info.concat({
      user: inputUser,
      title: inputTitle,
    });
    setInfo(NewInfo);
  };

  const search = () => {
    setSearchInfo([]);
    let filteredInfo;
    if (select === "user") {
      filteredInfo = info.filter((elem) => {
        return elem.user.includes(inputSearchInfo);
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
        <input type="text" onChange={(e) => setInputUser(e.target.value)} />
        제목 :
        <input type="text" onChange={(e) => setInputTitle(e.target.value)} />
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
