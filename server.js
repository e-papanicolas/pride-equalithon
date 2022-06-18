const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(helmet());
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV !== "development") {
  app.use(morgan("tiny"));
}

app.get("/", (req, res, next) => {
  res.send("App is running");
});

// start server
app.listen(port, () => console.log(`Server is running on ${port}`));

module.exports = app;
