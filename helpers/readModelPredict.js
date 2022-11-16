const fs = require("fs");
const path = require("path");
const util = require("util");
const pathFile = path.join(__dirname, "../ExampleModel/example.txt");

const file = fs.readFileSync(pathFile, {
  encoding: "utf-8",
});

module.exports = file;
