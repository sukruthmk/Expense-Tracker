const Expense = require('../models/expense.model');

exports.create = function (req, res) {
    let expense = new Expense(
        {
            name: req.body.name,
            category: req.body.category,
            location: req.body.location,
            date: req.body.date,
            price: req.body.price
        }
    );

    expense.save(function (err) {
        if (err) {
            // TODO: implement proper method to display errors
            return res.send(err);
        }
        console.log("coming inside");
        res.send('Expense Created successfully');
    })
};
