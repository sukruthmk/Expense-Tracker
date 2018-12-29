const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const expense_controller = require('../controllers/expense.controller');

// Get all expenses from database
router.get('/', expense_controller.read);

// Create end point to insert into database
// TODO: need to change it POST for better security
router.post('/create', expense_controller.create);
module.exports = router;
