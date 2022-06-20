import UserActions from "../controllers/user.controller.js";
import express from "express";

const userRoutes = express.Router();

// create a new user
userRoutes.post("/", UserActions.new);
// retrieve all Users
userRoutes.get("/", UserActions.getAll);
// retrieve a single user with id
userRoutes.get("/:id", UserActions.getOne);
// update a user with an id
userRoutes.put("/:id", UserActions.updateOne);
// delete a user with an id
userRoutes.delete("/:id", UserActions.destroyOne);

export default userRoutes;
