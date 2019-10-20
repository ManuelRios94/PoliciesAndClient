var express = require('express');
var router = express.Router();

const policiesController = require('../../controllers/Policies/policiesController');

/* GET The Policies Linked by Client Name . */
router.get('/client-name/:name', policiesController.GetPoliciesListByClientName);

/* GET Client Linked by Policie Number . */
router.get('/id/:id', policiesController.GetClientByPolicieNumber);


module.exports = router;