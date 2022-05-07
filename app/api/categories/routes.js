var express = require('express');
var router = express.Router();
const {getAll, create, update,destroy} = require("./controller");
const {validateOne, validateCreate, validateUpdate} = require("./validation");

router.get('/categories', getAll);
router.post('/categories', validateCreate, create);
router.put('/categories/:id', validateUpdate,update);
router.delete('/categories/:id', validateOne, destroy);

module.exports = router;