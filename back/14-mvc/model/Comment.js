// db에서 받아온 데이터라고 가정
function commentInfos () {
    const comments = [
        {
          id: 1,
          userId: "helloworld",
          data: "2021-10-31",
          comment: "안녕하세요!",
        },
        {
          id: 2,
          userId: "hello",
          data: "2021-11-31",
          comment: "반가워요!",
        },
        {
          id: 3,
          userId: "byeworld",
          data: "2022-1-31",
          comment: "안녕히계세요!",
        },
        {
          id: 4,
          userId: "apple",
          data: "2023-3-31",
          comment: "난 사과!",
        },
      ];
      return comments;
}
  
module.exports = commentInfos;