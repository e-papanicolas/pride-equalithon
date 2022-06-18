import express from "express";
import logger from "morgan";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8081;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// * change cors configuration to this when running with a front end
// const corsOptions = {origin: "http://localhost:____"};
// app.use(cors(corsOptions));

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

// start server
app.listen(port, () => console.log(`Server is running on ${port}`));

export default app;
