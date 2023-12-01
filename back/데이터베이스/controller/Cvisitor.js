const Visitor = require('../model/Visitor');
function main(req, res) {
    res.render('index');
}

async function getVisitors(req, res) {
    // before
    // res.render('visitor', {data: Visitor.getVisitors() });

    // after 
    const result = await Visitor.getVisitors();
        res.render('visitor', { data: result})
}

async function post_visitor(req, res) {
    // console.log(req.body);

    const result = await Visitor.postVisitor(req.body);
    console.log(result);
    res.json( {id: result ,name: req.body.name , comment: req.body.comment});
}


module.exports = {
    main: main,
    getVisitors: getVisitors,
    post_visitor: post_visitor
}