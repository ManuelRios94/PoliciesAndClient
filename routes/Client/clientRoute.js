var express = require('express');
var router = express.Router();

const clientController = require('../../controllers/Client/clientController');
const isAdminOrUser = require('../../middleware/isAdminOrUser');

/* GET Client by Id . */
router.get('/id/:id', isAdminOrUser, clientController.GetClientById);

/* GET Client by Name . */
router.get('/name/:name', isAdminOrUser, clientController.GetClientByName);


module.exports = router;