const Comment = require('../model/Comment');
// get /
exports.main = (req,res) => {
    res.render('index');
}
// get / comments
exports.comments = function(req, res) {
    res.render('comments', { commentInfos: Comment() });
}

exports.comment = function (req, res) {
    const comments = Comment();
    const commentId = req.params.id;
    if (commentId < 1 || commentId > comments.length || isNaN(commentId)) {
      return res.render("404");
    }
    if (0 < commentId < comments.length) {
      res.render("comment", { comment: comments[commentId - 1] });
    }
  }