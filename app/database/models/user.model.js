import { Sequelize, DataTypes } from "sequelize";
import seqConfig from "../config/config.js";

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  seqConfig
);

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      len: [3 - 18],
    },
  },
  // * add this in maybe
  // passwordConfirmation: {
  //   type: DataTypes.STRING,
  //   validate: {
  //     equals: password,
  //   },
  // },
});

export default User;
