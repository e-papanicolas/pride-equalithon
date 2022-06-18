import { db } from "../models/index.js";
const User = db.users;
const Op = db.Sequelize.Op;

const create = (req, res, next) => {};
const findAll = (req, res, next) => {};
const findOne = (req, res, next) => {};
const update = (req, res, next) => {};
const destroy = (req, res, next) => {};

export { create, findAll, findOne, update, destroy };
