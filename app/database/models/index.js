import { Sequelize } from "sequelize";
import User from "./user.model.js";
import seqConfig from "../config/config.js";

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  seqConfig
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = User;

// test the connection to the database
try {
  await sequelize.authenticate();
  console.log("sequelize connection successful");
} catch (err) {
  console.error("unable to connect to database");
}

export { db };
