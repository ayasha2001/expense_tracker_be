const Expense = require("../models/expense");

exports.postExpenseDetail = (req, res) => {
  Expense.create({
    amount: req.body.amount,
    description: req.body.description,
    category: req.body.category,
  })
    .then((res) => {
      console.log("Expense succesfully saved");
      res.status(200).json(res)
    })
    .catch((err) => {
      console.log("Expense not saved");
    });
};

exports.getExpenseDetails = (req, res) => {
    Expense.findAll()
    .then((expenses) => {
      console.log(expenses);
      res.json(expenses);
    })
    .catch((err) => {
      console.log("expenses not retrieved");
    });
};

exports.deleteDetail = (req, res) => {
  const id = req.params.id;
  Expense.destroy({ where: { id: id } })
    .then((numDeletedRows) => {
      console.log(`Deleted ${numDeletedRows} expense(s)`);
      res.sendStatus(200); // Send a success response if deletion is successful
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500); // Send a server error response if there's an error
    });
};
