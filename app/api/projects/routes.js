var express = require('express');
var router = express.Router();
const {getAll,getOne} = require("./controller");
const {validateOne} = require("./validation");

router.get('/projects', getAll);
router.get('/projects/:id', validateOne, getOne);

module.exports = router;