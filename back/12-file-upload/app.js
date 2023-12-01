const express = require('express');
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장 모듈
const upload = multer({
    dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
})

// multer 세부설정
const uploadDetail = multer({
    // storage: 저장할 공간에 대한 정보
    storage: multer.diskStorage({
        // destination: 경로 설정
        destination(req, file, done) {
            // done: 콜백함수
            // done(null, xx) : null => 에러가 없다는 의미
            done(null, "uploads/"); // 파일을 업로드할 경로 설정,
        },
        filename(req, file, done) {
            // 파일의 확장자 추출 => 'path' 모듈 활용
            console.log(req.body);
            const ext = path.extname(file.originalname); // 확장자 추출
            // done(null, path.basename(file.originalname, ext));
            // 확장자를 제외한 파일 이름만
            // console.log(path.basename(file.originalname, ext));
            done(null, path.basename(req.body.id, ext) + Date.now() + ext);
        }
    }),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
}) 

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// 프론트에서 첫번쨰 패러미터 (/uploads)로 들어오면 두번째 패러미터로 처리해라
app.use('/uploads', express.static(__dirname+'/uploads'));

app.get('/', function(req, res) {
    res.render('index');
})

// 1. single() : 하나의 파일을 업로드 밑의 userfile은 ejs의 input name
// upload.single('userfile) <= 응답하기 전에 multer 라는 미들웨어로 처리를 해줘라
// 클라이언트 요청이 들어오면 multer 설정(upload)에 따라 파일을 업로드 한 후 req.file 객체를 생성

// single() 인자는 input 태그의 name 값과 일치시켜야 함
app.post('/upload', uploadDetail.single('userfile'), function(req, res) {
    console.log(req.body);
    console.log(req.file);
    res.redirect('/');
    // {
    //     fieldname: 'userfile', // 폼에 정의한 name 값
    //     originalname: 'christmas.jpg', // 원본 파일 명
    //     encoding: '7bit', // 파일 인코딩 타입
    //     mimetype: 'image/jpeg', // 파일 타입
    //     destination: 'uploads/', // 파일 저장 경로
    //     filename: 'christmas1701053957631.jpg', // 저장된 파일 명
    //     path: 'uploads\\christmas1701053957631.jpg', // 업로드된 파일 전체 경로
    //     size: 103113 // 파일 크기
    //   }
})



//2. array() : 하나의 인풋에 여러 파일 업로드
app.post('/upload/array', uploadDetail.array('userfiles'), function(req, res) {
    // [{file1 정보}, {file2 정보},...] : 배열 형태
    console.log(req.files);
    console.log(req.body);
    res.send('하나의 파일에 여러 파일 업로드 완료!');
})


// fields() : 여러 파일을 각각의 인풋에 업로드.
app.post('/upload/fields', uploadDetail.fields([{name: 'userfiles1'}, {name: 'userfiles2'}]), function(req, res) {
    /*
    {
        userfile1: [
            { 파일 정보}
        ],
        userfile2: [
            { 파일 정보}
        ]
    }
    */
    console.log(req.files);
    console.log(req.body);
    res.send('여러개의 인풋에 각각의 파일 업로드 완료!')
})

app.post('/dynamic', uploadDetail.single('dynamicFile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send({ file: req.file, title: req.body.title});
})

app.get('/exercise1', function(req, res) {
    res.render('exercise1');
})

app.post('/exercise1/dynamic', uploadDetail.single('dynamicFile'), function(req, res) {
    console.log(req.body);
    res.send( { file: req.file, userInform: req.body});
})

app.listen(PORT);