
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./utils/database");

const app = express();
var cors = require("cors");
const {
  postExpenseDetail,
  getExpenseDetails,
  deleteDetail,
} = require("./controllers/expense");

app.use(cors());

app.use(bodyParser.json());

app.post("/save-expense", postExpenseDetail);
app.get("/home", getExpenseDetails);
app.post("/delete-expense/:id", deleteDetail);

sequelize
  .sync()
  .then((res) => {})
  .catch((err) => {
    console.log("err", err);
  });
app.listen(3000);
