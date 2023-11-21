// http module로 웹서버 생성
const http = require('http');
const fs = require('fs'); // file system module 


const server = http.createServer(function (req, res) {
  // req: 클라이언트에서 서버로 들어온 요청
  // res: 서버에서 클라이언트로 보내는 응답
  //   res.writeHead(200, {'content-type': 'text/html',
  // 'charset' : 'utf8'});
  //     res.write('<h1>hello, node.js!</h1>'); //응답 본문
  //     res.end('<p>My first node server!</p>'); // 응답 종료 응답을 종료해야함.
  try {
    const data = fs.readFileSync("./inde.html");
    res.writeHead(200, { "content-type": "text/html", charset: "utf8" });
    res.write(data);
    res.end();

  } catch (error) {
    const data = fs.readFileSync('./404.html');
    res.writeHead(404, { "content-type": "text/html", charset: "utf8" });
    res.write(data);
    res.end();
    console.log(error);
  }
});


// request 이벤트 : 클라이언트 요청 두개가 뜨는 이유는 localhost와 favicon.ico
server.on('request', function(req, res) {
    console.log('request 이벤트 발생', req.url);
})

// connection 이벤트 : 클라이언트가 접속 했을 때 (클라이언트와 서버가 연결되었을 때)
server.on('connection', function(req, res) {
    console.log('connection 이벤트 발생');
})

const PORT = 8000;

server.listen(PORT, function() {
    console.log(`server listening on ${PORT}`);
})

// 10초 후 서버 종료,
// setTimeout(function() {
//     console.log('10초가 지나서 서버 종료.')
//     server.close();
// }, 10000);