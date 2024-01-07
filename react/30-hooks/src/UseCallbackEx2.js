import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function UseCallbackEx2({ postid }) {
    const [post, setPost] = useState({});

    // [before]
    // const getPost = async () => {
    //     console.log('data fetching...');
    //     // 데이터 요청
    //     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${ postid }`);
    //     setPost(res.data);
    // }

     // [after]
     // useCallback 훅으로 메모이제이션(캐싱) -> 의존성 배열에 있는 postId가 변경되지 않는 한,
     // 함수는 다시 생성되지 않음.

     const getPost = useCallback(async () => {
        console.log('data fetching...');
        // 데이터 요청
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${ postid }`);
        setPost(res.data);
    }, [postid]);


    // useEffect 의존성 배열에 "함수"
    // 컴포넌트가 리렌더링 -> 함수 재생성 (주소값 변경) -> getPost 재호출
    // 의존성 배열에 post를 넣으면 함수는 참조값이므로 getPost()를 이용해서 생성된 post의 참조값이 계속 달라져서 useEffect 무한 실행.
    // 의존성 배열에 getPost를 넣으면 useCallback으로 postid가 바뀌지 않는 한 함수는 재정의되지 않으므로 한 번만 실행 
    // 애초에 이런 방식으로 useCallback과 useEffect를 같이 쓰는 듯.
    useEffect(() => {
        getPost();
    }, [getPost]);
    return ( <>
    <h1>useCallback Ex2</h1>
    {post.id ? post.title : '로딩중...'}
    </> );
}

export default UseCallbackEx2;