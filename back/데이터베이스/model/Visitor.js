const mysql = require("mysql2/promise");

// DB연결
const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});


async function getVisitors() {
  const [result] = await conn.query('SELECT * FROM visitor');
  return result;
}

async function postVisitor(data) {

  const sql = 'INSERT INTO visitor (name, comment) VALUES (?, ?)';
  const values = [data.name, data.comment];
  const [result] = await conn.query(sql, values);
  return result.insertId;

}

module.exports = {
  getVisitors: getVisitors,
  postVisitor: postVisitor
};
