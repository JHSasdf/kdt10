const express = require('express');
const ws = require('ws');

const app = express();

const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('client');
});

const server = app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`)
});

// express서버와 웹 소켓 서버를 연결 (같은 포트를 공유)
const wsServer = new ws.Server({server: server});

const sockets = []; // 클라이언트 소켓들을 저장할 배열

wsServer.on('connection', function(socket) {
    console.log('[클라이언트 연결 완료]');
    sockets.push(socket); // 배열에 접속한 클라이언트 객체 추가
    console.log('소켓명', sockets);

    // 클라이언트의 메세지 수신 이벤트
    socket.on('message', function(message) {
        console.log('클라이언트로부터 받은 메세지 >', message);
        
        //웹 소켓 서버에 접속한 모든 클라이언트에게 메세지 전송
        // = 브로드캐스팅 (여러 컴퓨터한테 데이터 전송)

        // 여기의 소켓은 배열 sockets에 있는 모든 socket
        sockets.forEach(function(socket) {
            socket.send(`${message}`);
        })      
    });

    socket.on('error', function(error) {
        console.log('에러 발생 >', error);
    })

    socket.on('close', function() {
        console.log('[클라이언트 연결 종료');
    })
})