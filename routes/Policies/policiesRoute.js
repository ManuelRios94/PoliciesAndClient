var express = require('express');
var router = express.Router();

const policiesController = require('../../controllers/Policies/policiesController');
const isAdmin = require('../../middleware/isAdmin');

/* GET The Policies Linked by Client Name . */
router.get('/client-name/:name', isAdmin, policiesController.GetPoliciesListByClientName);

/* GET Client Linked by Policie Number . */
router.get('/id/:id', isAdmin, policiesController.GetClientByPolicieNumber);


module.exports = router;