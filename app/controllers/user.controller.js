import { db } from "../database/models/index.js";

const User = db.users;
const UserActions = {};

UserActions.new = async (req, res, next) => {
  // validate request
  if (!req.body.username) {
    res.status(400).json({ message: "Fields cannot be empty" });
  }
  // create instance and save to db
  try {
    console.log(req.body);
    let newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

UserActions.getAll = async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

UserActions.getOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

UserActions.updateOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    let updatedUser = await User.findByPk(id);
    await updatedUser.update(req.body);
    await updatedUser.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

UserActions.destroyOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userToDelete = await User.findByPk(id);
    await userToDelete.destroy();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default UserActions;
