var express = require('express');
var router = express.Router();
const {getAll, getOne,create, update,destroy} = require("./controller");
const {validateOne, validateCreate, validateUpdate} = require("./validation");

router.get('/projects/progress/:id', getOne);
router.post('/projects/progress', validateCreate, create);
router.put('/projects/progress/:id', validateUpdate,update);
router.delete('/projects/progress/:id', validateOne, destroy);

module.exports = router;