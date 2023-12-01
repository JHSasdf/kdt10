const Visitor = require('../model/Visitor');
function main(req, res) {
    res.render('index');
}

function getVisitors(req, res) {
    // before
    // res.render('visitor', {data: Visitor.getVisitors() });

    // after 
    Visitor.getVisitors( function(result) {
        console.log('Cvisitor.js>', result);
        res.render('visitor', { data: result});
    })
}

function post_visitor(req, res) {
    console.log(req.body);

    Visitor.postVisitor(req.body, function(result) {
        console.log(result);
        res.send( {id: result, name: req.body.name, comment: req.body.comment});
    })
}


module.exports = {
    main: main,
    getVisitors: getVisitors,
    post_visitor: post_visitor
}