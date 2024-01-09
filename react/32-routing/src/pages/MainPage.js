import { useSearchParams } from "react-router-dom";

function MainPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    // searchParams는 객체값
    console.log(searchParams.get('mode')); // Dark or null
    // / => null
    // /?modoe=Dark => Dark

  return (
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <h1>Main Page Death!</h1>
      <button onClick={() => {
        // {mode: 'Dark'} 설정
        setSearchParams({mode: 'Dark'});
      }}>Dark Mode</button>
    </div>
  );
}

export default MainPage;
