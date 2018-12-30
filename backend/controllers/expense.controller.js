const Expense = require('../models/expense.model');

exports.read = function (req, res) {
    Expense.find().sort('-date').find(function (err, expenses) {
        if (err) return next(err);
          res.send(expenses);
    });
};

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
        res.send('Expense Created successfully');
    })
};
