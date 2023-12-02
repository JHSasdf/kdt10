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

    Visitor.postVisitor(req.body, function(result) { // result는 model에서 넘겨준 rows.insertId
        console.log(result);
        res.send( {id: result, name: req.body.name, comment: req.body.comment});
    })
}
// get /visitor => localhost:PORT/visitor?id=id
function get_visitor(req, res) {
    console.log(req.query.id);

    // 모델에 함수 호출
    Visitor.getVisitor(req.query.id, function(result) {
        console.log('get_visitor visitor.js>', result);
        res.send(result);
    })
}

function patch_visitor(req, res) {
    console.log(req.body);

    Visitor.patchVisitor(req.body, function(result) {
        console.log('patchvisitor visitor.js>', result);
        res.send('수정성공');
    })
}

function delete_visitor(req, res) {
    console.log(req.body);

    Visitor.deleteVisitor(req.body.id, function(result) {
        console.log('delete_Visitor Cvisitor.js> ', result);
        res.send('삭제성공');
    })
}

module.exports = {
    main: main,
    getVisitors: getVisitors,
    post_visitor: post_visitor,
    get_visitor: get_visitor,
    patch_visitor: patch_visitor,
    delete_visitor: delete_visitor
}