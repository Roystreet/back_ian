const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const router = require("./router/index");
const port = process.env.PORT || 3001;
require("dotenv").config();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () => console.log("servidor levantado"));

module.exports = app;
