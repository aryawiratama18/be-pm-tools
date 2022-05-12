var express = require('express');
var router = express.Router();
const {getAll, getOne,create, update,destroy} = require("./controller");
const {validateOne, validateCreate, validateUpdate, validateDelete} = require("./validation");

router.get('/projects/progress/:id', validateOne, getOne);
router.post('/projects/progress/:id', validateCreate, create);
router.put('/projects/progress/:id',validateUpdate,update);
router.delete('/projects/progress/:id', validateDelete, destroy);

module.exports = router;