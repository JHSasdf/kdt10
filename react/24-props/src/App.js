function App() {
  function valid() {
    console.log('콘솔 띄우기 성공!')
  }
  return (
    <div className="App">
      <FuncComponent name='코딩온'/>
      <FuncComponent />
      <hr />
      <ClassComponent name='클래스 컴포넌트' />
      <ClassComponent/>
      <hr />
      <Button link='https://google.com'>Google</Button>
      <hr />
      <FavoriteFood food='갈비찜덮밥'></FavoriteFood>
      <hr />
      <BestSeller title='나의 하루는 4시 40분에 시작된다' author='김유진' price="13,500" type="자기 계발서"></BestSeller>
      <hr />
      <ExerciseClassComponent valid={valid}></ExerciseClassComponent>
    </div>
  );
}

export default App;
