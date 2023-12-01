const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost', // 호스트 이름, 포트는 자동구성
    database: 'kdt', // mysql에서 database이름
    user: 'user',
    password: '1234'
});

module.exports = pool;