const mongoose = require('mongoose');

// TODO: remove debug
mongoose.set('debug', true);

const Schema = mongoose.Schema;

let ExpenseSchema = new Schema({
    name: {type: String, required: true, max: 100},
    category: {type: String, max: 50},
    location: {type: String, max: 100},
    price: {type: Number, required: true},
    date: {type: Date, required: true, default: Date.now}
});


// Export the model
module.exports = mongoose.model('Expense', ExpenseSchema);
