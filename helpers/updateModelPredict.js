const fs = require("fs");
const path = require("path");
const util = require("util");
const pathFile = path.join(__dirname, "../ExampleModel/example.txt");

const prueba = ["hola", "cliente"];

module.exports = (inputs) => {
  try {
    const text = `\n Cliente : ${inputs[0]}.\n Respuesta : ${inputs[1]}.`;
    fs.appendFileSync(pathFile, text);
    console.log("logrado");
  } catch (err) {
    console.log(err);
  }
};
