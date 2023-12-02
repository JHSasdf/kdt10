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

    cb(rows.insertId); // rows.insertId의 정보를 controller에 넘겨줌.
  })
}

function getVisitor(id, cb) {
  const sql = `SELECT * from visitor where id = ?`;
  conn.query(sql, [ id ], function(err, rows) {
    if(err) {
      throw err
    }

    console.log('getVisitor Visitor.js>', rows);
    cb(rows[0]);
  })
}

function patchVisitor(data, cb) {
  const sql = 'UPDATE visitor SET name = ?, comment = ? where id= ?';
  conn.query(sql, [data.name, data.comment, data.id], function (err, rows) {
    if (err) {
      throw err
    }

    console.log('patchVisitor getVisitor.js >', rows);
    cb(rows);
  });
}

function deleteVisitor(id, cb) {
  const sql = 'DELETE FROM visitor where id = ?'
  conn.query(sql, [id], function(err, rows) {
    if (err) {
      throw err
    }

    console.log('deleteVisitor visitor.js>', rows);
    cb(rows);
  });
}

module.exports = {
  getVisitors: getVisitors,
  postVisitor: postVisitor,
  getVisitor: getVisitor,
  patchVisitor: patchVisitor,
  deleteVisitor: deleteVisitor
};
