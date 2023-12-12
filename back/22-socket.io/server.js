const exp = require('constants');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const PORT = 8000;

const app = express();

app.set('view engine', 'ejs');

// express 앱으로 http 서버 생성
const server = http.createServer(app);
// socket.id를 http 서버에 연결
const io = socketIO(server);

// app.get('/', function(req, res) {
//     res.render('chat');
// });

app.get('/exercise', function(req, res) {
    res.render('exercise');
});


app.use(express.static('public'));

const sockets = [];

// io.on(): socket 관련한 통신 작업을 처리
io.on('connection', function(socket) {
    // connection 이벤트는 클라이언트가 접속했을 때 발생
    // 콜백함수의 인자로 소켓 객체를 제공

    // socket.id : 소켓의 고유 id (브라우저 탭 단위)
    console.log('서버 연결 완료 >', socket.id);
    // socket.emit(event_name, data) : 해당 클라이언트에게만 이벤트, 데이터를 전송
    // io.emit(event_name, data): 서버에 접속된 모든 클라이언트에게 전송
    
    // io.to(소켓 아이디).emit(event_name, data) : 소켓 아이디에 해당하는 클라이언트에게만 전송
    
    // 전체 클라이언트에게 입장 안내
    
    sockets.push(socket.id);
    io.emit('notice', {msg: `${socket.id}님이 입장하셨습니다.`, sockets: sockets});

    // [실습 1]
    // socket.on('hello', function(data) {
    //     console.log(`${data.who}: ${data.msg}`);

    //     socket.emit('helloKR', {who: 'hello', msg: '안녕'});
    // });

    // socket.on('study', function(data) {
    //     console.log(`${data.who}: ${data.msg}`);

    //     socket.emit('studyKR', {who: 'study', msg: '공부좀 해라'});
    // });

    // socket.on('bye', function(data) {
    //     console.log(`${data.who}: ${data.msg}`);

    //     socket.emit('byeKR', {who: 'bye', msg: '안녕히 가세요'});
    // });

    socket.on('text', function(data) {
        console.log(`${data.who}: ${data.msg}`);
        socket.broadcast.emit('brod', {who: data.who, msg: data.msg});
    })

    socket.on('toText', function(data) {
        io.to(data.to).emit('toClient', {who: data.who, msg:data.msg});
    })
})

server.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
})