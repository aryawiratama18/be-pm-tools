var express = require('express');
var router = express.Router();
const {getAll,getOne, create, update,destroy,assign} = require("./controller");
const {validateOne, validateCreate, validateUpdate, validateAssign} = require("./validation");

router.get('/projects', getAll);
router.get('/projects/:id', validateOne, getOne);
router.post('/projects', validateCreate, create);
router.post('/projects/:id', validateAssign, assign);
router.put('/projects/:id', validateUpdate,update);
router.delete('/projects/:id', validateOne, destroy);

module.exports = router;