const modelFeeling = require("../modelosPredict/feeling");
const modelSoldInteractve = require("../modelosPredict/interactiveSold");
const modelSoldInteractiveDB = require("../modelosPredict/interactiveSoldDataBase");
const gpt3 = require("../helpers/gpt3");

const analystFeel = async (req, res) => {
  const { consulta } = req.body;
  console.log(consulta);
  const input = modelFeeling(consulta);
  const analyst = await gpt3(input);
  res.json({ result: analyst });
};

const analystSoldInteractive = async (req, res) => {
  const { consulta } = req.body;
  console.log(consulta);
  const input = modelSoldInteractve(consulta);
  const analyst = await gpt3(input);
  res.json({ result: { coment: analyst, type: "response" } });
};

const analystSoldInteractiveDB = async (req, res) => {
  const { consulta } = req.body;
  console.log(consulta);
  const input = modelSoldInteractiveDB(consulta);
  const analyst = await gpt3(input);
  res.json({ result: { coment: analyst, type: "response" } });
};

module.exports = {
  analystFeel,
  analystSoldInteractive,
  analystSoldInteractiveDB,
};
