var express = require('express');
var router = express.Router();
var movies = require('../data/data')

/* GET movies listing. */
router.get('/', function (req, res, next) {
    res.json(movies)
});

/* POST movies create. */
router.post('/', function (req, res, next) {
    movies.push(req.body)
    res.json(movies)
});

/* PUT movies update. */
router.put('/:id', function (req, res, next) {
    for (let i = 0; i < movies.length; ++i) {
        const movie = movies[i]
        if (movie.id === +req.params.id) {
            movies[i].name = req.body.name
            movies[i].author = req.body.author
            res.json(movies)
            return
        }
    }
    res.json({success: false, message: `can not find film with id ${req.body.id}`})
});

/* DELETE movies create. */
router.delete('/:id', function (req, res, next) {
    for (let i = 0; i < movies.length; ++i) {
        const movie = movies[i]
        if (movie.id === +req.params.id) {
            movies.splice(i, 1);
            res.json(movies)
            return
        }
    }
    res.json(movies)
});

module.exports = router;
