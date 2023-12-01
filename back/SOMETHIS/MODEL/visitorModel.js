const db = require('../DATABASE/database');

async function getDbVisitors() {
    const [visitors] = await db.query('SELECT * from visitor');
    console.log(visitors);
    return visitors;

}

module.exports = {
    getDbVisitors: getDbVisitors
}