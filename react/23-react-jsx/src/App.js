import './App.css';

function App() {
  const name = '피카츄';
  const animal = '쥐';
  const a = 300;
  const b = 275;
  const title = 'Hello World';

  const styles = {
    backgroundColor: 'yellow',
    color: 'skyblue',
    fontSize: '2rem',
  };
  // 주석 작동

  return (
    <div className="App req">
      {/* 실습 1 */}
      <h2>
        제 반려 동물의 이름은 <strong>{name}</strong>입니다.
      </h2>
      <h2>
        <strong>{name}</strong>는 <strong>{animal}</strong>입니다.
      </h2>

      {/* 실습 2 */}
      <h2>실습 2: {3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</h2>
      <h2>실습 3: {a > b && 'a는 b보다 큽니다.'}</h2>
      <h2>실습 3: {a > b ? 'a는 b보다 큽니다.' : '아닙니다'}</h2>

      <div className="loginTitle">
        <h1>{title}</h1>
      </div>
      <div>
        아이디: <input type="text" />
      </div>
      <div>
        비밀번호: <input type="text" />
      </div>

      {/* JSX 문법 */}
      {/* 1. 하나로 감싸인 요소 (부모요소)여야 함 */}
      {/* 2. javascript 표현식 사용
        - {}로 감싸면 js 표현식 사용 가능
        - {}에서 삼항 연산자 사용 가능, (if 불가능) 
        - for, if문 사용하고 싶으면 위에서 특정 변수에 정의하고 return에 넣어줘야함*/}

      <div>{name} 안녕하세요!</div>
      <div>
        {name === 'gildong'
          ? 'gildong입니다.'
          : 'gildong이 아닙니다. 잘못 아셨네요'}
      </div>

      {/* 3. style 속성 
        -리액트에서 돔 요소에 스타일 적용시 문자열x -> 객체 사용 (js문법 + 객체 해서 {{}}가 됨)
        - 스타일 속성 이름 중에서 하이픈(-) 포함시 camelCase 사용
      */}
      <div
        style={{ backgroundColor: 'blue', color: 'white', fontSize: '3rem' }}
      >
        안녕하세요 감사해요 잘있어요 다시만나요
      </div>
      <div style={styles}>안녕히계세여</div>

      {/* 4. className 사용
        - class 속성이 아닌 className 속성 사용!
        
        5. 종료 태그가 없는 태그의 사용
            - 기존에 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
            - <input> -> <input></input> or <input /> 
            - <br> -> <br></br> or <br/>
            
        6. wntjr
          -//: jsx 외부 주석 (resturn 밖)
          - jsx 내부 주석 {**}    
            */}
    </div>
  );
}

export default App;
