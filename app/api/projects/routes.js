var express = require('express');
var router = express.Router();
const {getAll,getOne, create, update,destroy,memberAssign, ownerAssign} = require("./controller");
const {validateOne, validateCreate, validateUpdate, validateAssignMember, validateAssignOwner} = require("./validation");

router.get('/projects', getAll);
// router.get('/projects/:id', validateOne, getOne);
router.post('/projects', validateCreate, create);
router.post('/projects/member/:id', validateAssignMember, memberAssign);
router.post('/projects/owner/:id', validateAssignOwner, ownerAssign);
router.put('/projects/:id', validateUpdate,update);
router.delete('/projects/:id', validateOne, destroy);

module.exports = router;