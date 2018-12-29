const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ExpenseSchema = new Schema({
    name: {type: String, required: true, max: 100},
    category: {type: String, max: 50},
    location: {type: String, max: 100},
    price: {type: Number, required: true},
    date: {type: Date, required: true}
});


// Export the model
module.exports = mongoose.model('Expense', ExpenseSchema);
