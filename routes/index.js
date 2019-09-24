var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('-----------------------------')
  console.log('OK')
  console.log('-----------------------------')
  res.render('index', { title: 'Express' });
});

router.get("/api/error", (req, res, next) => {
  console.log('-----------------------------')
  console.error('ERROR')
  console.log('-----------------------------')
    const err = new Error("例外が発生しました")
    throw err
});

module.exports = router;
