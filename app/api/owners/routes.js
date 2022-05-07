var express = require('express');
var router = express.Router();
const {getAll, create, update,destroy} = require("./controller");
const {validateOne, validateCreate, validateUpdate} = require("./validation");

router.get('/owners', getAll);
router.post('/owners', validateCreate, create);
router.put('/owners/:id', validateUpdate,update);
router.delete('/owners/:id', validateOne, destroy);

module.exports = router;