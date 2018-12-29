const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const expense_controller = require('../controllers/expense.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/create', expense_controller.create);
module.exports = router;
