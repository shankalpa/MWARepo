var express = require('express');
var inventors = require('../inventors.json')
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index.html', { title: 'Inventors', data : inventors});
});

module.exports = router;