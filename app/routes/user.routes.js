import User from "../controllers/user.controller.js";
import express from "express";

const userRoutes = express.Router();

// create a new user
userRoutes.post("/", User.new);
// retrieve all Users
userRoutes.get("/", User.getAll);
// retrieve a single user with id
userRoutes.get("/:id", User.getOne);
// update a user with an id
userRoutes.put("/:id", User.updateOne);
// delete a user with an id
userRoutes.delete("/:id", User.destroyOne);

export default userRoutes;
