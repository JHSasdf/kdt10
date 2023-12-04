const mysql = require("mysql2/promise");

// DB연결
const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

async function insertUser(data) {
    const sql = 'INSERT INTO USER (userid, name, pw) VALUES (?, ?, ?)'
    const userInfo = [
        data.id,
        data.name,
        data.pw,
    ]
    const [result] = await conn.query(sql, userInfo)
    return result;
}

async function postLogin(data, res) {
    const sql = 'SELECT * FROM USER where userid = ?'
    try {
        const [result] = await conn.query(sql, [data.id]);

        if(result[0].pw == data.pw) {
            res.render('update', {userInfo: result[0]});
            return;
        } else {
            return ['아이디 혹은 비밀번호가 달라요.'];
        }
    }catch {
        return ['아이디가 없습니다.'];
    }
}

async function updateDb(data) {

    const sql2 =  'UPDATE user SET name = ?, pw = ? where id= ?'
    await conn.query(sql2, [data.nextname, data.nextpw, data.id]);
}

async function deleteDB(data) {
    const sql2 =  'DELETE FROM USER where id= ?'
    await conn.query(sql2, [data.id]);
}

module.exports = {
    insertUser: insertUser,
    postLogin: postLogin,
    updateDb: updateDb,
    deleteDB: deleteDB
}