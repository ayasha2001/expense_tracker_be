const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "backend1",
  "root",
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
    root: "localhost",
  }
);
module.exports = sequelize;
