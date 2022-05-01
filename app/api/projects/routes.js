var express = require('express');
var router = express.Router();

router.get('/projects', function (req,res,next) {
    res.json({
        message : 'test projects'
    })
})

module.exports = router;