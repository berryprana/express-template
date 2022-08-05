var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'asd' });
});

router.use('/product', require('./product/product.routes'))

module.exports = router;
