const userInfo = require('../model/user');

function getUserInfo(req,res) {
    res.render('user', {userInfo : userInfo()});
}

module.exports = {
    getUserInfo
}