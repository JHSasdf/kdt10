// props로 이름, 학년, 과목 받아옴

interface StudentInfo {
  name: string;
  grade: number;
  // 안줘도 되는 props는 이렇게 ?로 넣기
  subject?: string;
  // 인자 type 명시, return값 type 명시
  handleClick: (name: string, grade: number) => void;
}

// props는 이미 전부 받아왔기 때문에 구조분해 할당에서 정의할 지 안할지는 자기 마음임. 다만 상위에서 props로 받아온 것은 interface에서 전부 정의되어있어야함.
function Studnet({ name, grade, subject = '김포', handleClick }: StudentInfo) {
  return (
    <ul onClick={() => handleClick(name, grade)}>
      <li>이름: {name}</li>
      <li>학년: {grade}</li>
      <li>과목: {subject}</li>
    </ul>
  );
}

export default Studnet;
