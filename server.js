import express from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8081;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("App is running");
});

// start server
app.listen(port, () => console.log(`Server is running on ${port}`));

export default app;
