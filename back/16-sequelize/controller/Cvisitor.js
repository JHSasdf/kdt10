// [before]
// const Visitor = require('../model/Visitor');

// [after]
// models: models/index에서 export한 db 객체
const models = require('../models/index');
const Visitor = models.Visitor;

function main(req, res) {
    res.render('index');
}

function getVisitors(req, res) {
    // before
    // Visitor.getVisitors( function(result) {
    //     console.log('Cvisitor.js>', result);
    //     res.render('visitor', { data: result});
    // })

    // [after]
    // SELECT * FROM visitor
    Visitor.findAll().then( function(result) {
        console.log('findAll >', result);
        res.render('visitor', {data: result});
    })
}

function post_visitor(req, res) {
    console.log(req.body);

    // Visitor.postVisitor(req.body, function(result) { // result는 model에서 넘겨준 rows.insertId
    //     console.log(result);
    //     res.send( {id: result, name: req.body.name, comment: req.body.comment});
    // })

    //[after]
    // insert into (name, comment) 
    Visitor.create({
        name: req.body.name,
        comment: req.body.comment
    }).then( function(result) {
        console.log('create>', result);
        res.send(result);
    })
}
// get /visitor => localhost:PORT/visitor?id=id
function get_visitor(req, res) {
    console.log(req.query.id);

    // 모델에 함수 호출
    // Visitor.getVisitor(req.query.id, function(result) {
    //     console.log('get_visitor visitor.js>', result);
    //     res.send(result);
    // })

    // [after]
    Visitor.findOne({
        where: { id: req.query.id}
    }).then(function(result) {
        console.log('findOne >', result);
        res.send(result);
    });
}

function patch_visitor(req, res) {
    console.log(req.body);

    // Visitor.patchVisitor(req.body, function(result) {
    //     console.log('patchvisitor visitor.js>', result);
    //     res.send('수정성공');
    // })
    Visitor.update({
        name: req.body.name,
        comment: req.body.comment
    },
    {
        where: {id: req.body.id}
    }).then(function(result) {
        console.log('update>', result);
        res.send('수정 성공!');
})
}

function delete_visitor(req, res) {
    console.log(req.body);

    // Visitor.deleteVisitor(req.body.id, function(result) {
    //     console.log('delete_Visitor Cvisitor.js> ', result);
    //     res.send('삭제성공');
    // })
    Visitor.destroy({
        where: {id: req.body.id}
    }).then(function(result) {
        console.log('destroy >', result);
    });
}

module.exports = {
    main: main,
    getVisitors: getVisitors,
    post_visitor: post_visitor,
    get_visitor: get_visitor,
    patch_visitor: patch_visitor,
    delete_visitor: delete_visitor
}