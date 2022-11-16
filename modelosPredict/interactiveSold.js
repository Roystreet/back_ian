const model = require("../helpers/readModelPredict");

module.exports = (data) => {
  console.log(data);
  const capitalization = data[0].toUpperCase() + data.slice(1).toLowerCase();
  return `${model}
  Cliente: ${capitalization}
  Respuesta:
    `;
};
