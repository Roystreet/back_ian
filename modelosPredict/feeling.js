module.exports = (data) => {
  console.log(data);
  const capitalization = data[0].toUpperCase() + data.slice(1).toLowerCase();
  return `A: “Mi pedido aún no llega”

Sentimiento: Incómodo

A: “Mi pedido llegó defectuoso”

Sentimiento: Disgustado

A: “Quiero comprarle algo a mi esposo”

Sentimiento: Dudoso

A: “Quiero cancelar mi pedido”

Sentimiento: Incómodo

A: “No quiero hablar contigo”

Sentimiento: Incómodo

A: “Quiero comunicarme con un asesor”

Sentimiento: Incómodo

A: “Gracias”

Sentimiento: Satisfecho

A: “Quiero saber qué otros productos me recomiendas”

Sentimiento: Curiosidad

A: “No me gusta ese, ¿tienes otro?

Sentimiento: Insatisfacción y duda

A:${capitalization}

Sentimiento:
`;
};
