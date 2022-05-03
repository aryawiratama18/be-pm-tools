var express = require('express');
var router = express.Router();
const {getAll,getOne, create, update,destroy} = require("./controller");
const {validateOne, validateCreate, validateUpdate} = require("./validation");

router.get('/projects', getAll);
router.get('/projects/:id', getOne);
router.post('/projects', validateCreate, create);
router.put('/projects/:id', validateUpdate,update);
router.delete('/projects/:id', validateOne, destroy);

module.exports = router;