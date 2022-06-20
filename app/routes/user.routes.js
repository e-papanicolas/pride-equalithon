import userActions from "../controllers/user.controller.js";
import express from "express";

const userRoutes = express.Router();

// create a new user
userRoutes.post("/", userActions.new);
// retrieve all Users
userRoutes.get("/", userActions.getAll);
// retrieve a single user with id
userRoutes.get("/:id", userActions.getOne);
// update a user with an id
userRoutes.put("/:id", userActions.updateOne);
// delete a user with an id
userRoutes.delete("/:id", userActions.destroyOne);

export default userRoutes;
