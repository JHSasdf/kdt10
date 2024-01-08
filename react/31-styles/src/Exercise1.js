import './styles/exercise1.scss';

function Exercise1() {
    return ( <>
        <div className="larva">
      <div className="body body1">
        <div className="eye eye-white">
          <div className="eye eye-black"></div>
        </div>
      </div>
      <div className="body body2"></div>
      <div className="body body3"></div>
      <div className="body body4"></div>
      <div className="body body5"></div>

      {/*  process.env.PUBLIC_URL: /public 폴더 경로 */}
      <img
        className="grass"
        src= 'https://cdn.pixabay.com/photo/2017/02/01/11/25/grass-2029771_640.png'
        alt="잔디"
      />
    </div></> );
}

export default Exercise1;