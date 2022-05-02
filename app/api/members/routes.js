var express = require('express');
var router = express.Router();
const {getAll, create, update,destroy} = require("./controller");
const {validateOne, validateCreate, validateUpdate} = require("./validation");

router.get('/members', getAll);
router.post('/members', validateCreate, create);
router.put('/members/:id', validateUpdate,update);
router.delete('/members/:id', validateOne, destroy);

module.exports = router;