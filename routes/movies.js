var express = require('express');
var router = express.Router();

/* GET movies listing. */
router.get('/', function(req, res, next) {
    const movies = []
    movies.push({id: 1, name: "Matrix", author: "nebitno"})
    movies.push({id: 2, name: "LOTR", author: "Peter Jackson"})
    res.json(movies)
});

module.exports = router;
