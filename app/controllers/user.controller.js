import { db } from "../models/index.js";
const User = db.users;
const Op = db.Sequelize.Op;

User.create = (req, res, next) => {};
User.findAll = (req, res, next) => {};
User.findOne = (req, res, next) => {};
User.update = (req, res, next) => {};
User.destroy = (req, res, next) => {};

export default User;
