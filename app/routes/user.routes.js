import users from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

const userRoutes = () => {
  // create a new user
  router.post("/", users.create);
  // retrieve all users
  router.get("/", users.findAll);
  // retrieve a single user with id
  router.get("/:id", users.findOne);
  // update a user with an id
  router.put("/:id", users.update);
  // delete a user with an id
  router.delete("/:id", users.delete);
};

export default userRoutes;
