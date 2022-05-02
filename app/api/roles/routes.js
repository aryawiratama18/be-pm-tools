var express = require('express');
var router = express.Router();
const {getAll, create, update,destroy} = require("./controller");
const {validateOne, validateCreate, validateUpdate} = require("./validation");

router.get('/roles', getAll);
router.post('/roles', validateCreate, create);
router.put('/roles/:id', validateUpdate,update);
router.delete('/roles/:id', validateOne, destroy);

module.exports = router;