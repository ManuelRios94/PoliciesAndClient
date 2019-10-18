var express = require('express');
var router = express.Router();

const clientController = require('../../controllers/Client/clientController');

/* GET Client by Id . */
router.get('/id/:id', clientController.GetClientById);

/* GET Client by Name . */
router.get('/name/:name', clientController.GetClientByName);


module.exports = router;