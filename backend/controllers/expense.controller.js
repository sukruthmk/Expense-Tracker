const Product = require('../models/expense.model');

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
            return next(err);
        }
        res.send('Expense Created successfully')
    })
};
