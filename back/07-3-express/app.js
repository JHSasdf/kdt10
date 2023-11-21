const express = require('express');
const app = express(); // Express 모듈이 export 하는 최상위 함수로, express application을 만듦
// app 객체, express()함수를 호출해서 만들어진 express application
const PORT = 8000;


// express에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set('view engine', 'ejs');

// 템플릿 엔진 파일을 (.ejs) 저장할 위치 등록
app.set('views', './views');


// static 미들웨어 등록 (정적 파일 로드 ex. css, js, img)
// static이라는 실제 폴더를 static 이름으로 접근하겠다.
// dirname == 해당 파일인 app.js 기준
app.use('/asdf', express.static(__dirname + '/public'))
// app.get(클라이언트가 요청한 경로, 해당 경로로 요청이 들어왔을 때 실행할 함수)
app.get('/', function(req, res) {

    // view engine에 ejs를 사용하기로 했기 때문에 (line8) 확장자 불요, 써도 되긴 함.
    res.render('index');
})

app.listen(PORT, function() {
    console.log(`server listening on ${PORT}`) // 서버가 열리면 콜백함수 수행
});