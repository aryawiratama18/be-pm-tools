var express = require('express');
var router = express.Router();
const {getAll, create, update,destroy} = require("./controller");
const {validateOne, validateCreate, validateUpdate} = require("./validation");

router.get('/projectowners', getAll);
router.post('/projectowners', validateCreate, create);
router.put('/projectowners/:id', validateUpdate,update);
router.delete('/projectowners/:id', validateOne, destroy);

module.exports = router;