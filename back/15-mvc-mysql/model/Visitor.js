const mysql = require("mysql2");

// DB연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

// function getVisitors(cb) {
//   conn.query(`SELECT * FROM visitor`, function (err, rows) {
//     if (err) {
//       throw err;
//     }

//     console.log("Visitor.js>", rows);
//     /*
//     Cvisitor.js> [
//   { id: 1, name: '홍길동', comment: '내가 왔다' },
//   { id: 2, name: '이찬혁', comment: '으라차차' }
// ]
//         */
//     cb(rows);
//   });
// }

function getVisitors(cb) {
  conn.query(`SELECT * FROM visitor`, function (err, rows) {
    if (err) {
      throw err;
    }

    console.log("Visitor.js>", rows);
    /*
    Cvisitor.js> [
  { id: 1, name: '홍길동', comment: '내가 왔다' },
  { id: 2, name: '이찬혁', comment: '으라차차' }
]
        */
    cb(rows);
  });
}

function postVisitor(data, cb) {
  console.log(data);
  const sql = 'INSERT INTO visitor (name, comment) VALUES (?, ?)';
  const values = [data.name, data.comment];
  conn.query(sql, values, (err, rows) => {
    if(err) throw err;

    console.log('Visitor.js>', rows)

    cb(rows.insertId);
  })
}

module.exports = {
  getVisitors: getVisitors,
  postVisitor: postVisitor
};
