const model = require('../MODEL/visitorModel')

async function getVisitors(req, res) {
    const visitors = await model.getDbVisitors();
    res.render('index', {visitors: visitors })
}

module.exports = {
    getVisitors: getVisitors
}