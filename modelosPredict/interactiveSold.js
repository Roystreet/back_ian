module.exports = (data) => {
  console.log(data);
  const capitalization = data[0].toUpperCase() + data.slice(1).toLowerCase();
  return `A: “Hola, quiero comprar algo para mi esposo”

 B: “Tengo muchas alternativas para eso, ¿tienes algo en mente?”
 
 
 
 A: “Me gustaría conocer todas las alternativas de consolas que tienen”
 
 B: “Tenemos consolas de las marcas más populares: Nintendo, PlayStation y Xbox. Si me dices más detalles de qué te gustaría, te podría recomendar alguna que se ajuste a tus necesidades”
 
 
 
 A: “Quiero una lavadora económica”
 
 B: “Te puedo ofrecer diversas opciones, ¿cuánto te gustaría pagar como máximo?”
 
 
 
 A: “Quiero saber cuál sería mi fecha estimada de entrega”
 
 B: “Tu pedido está programado para ser entregado en 3 días, ahora se encuentra en proceso de empaquetado”
 
 
 
 A: “No me siento seguro de que eso sea lo que quiero”
 
 B: “Si deseas te puedo mostrar otras opciones, tenemos ofertas en la categoría de {categoría}”
 
 
 
 A: “¿Podrías decirme qué productos tienes en oferta?”
 
 B: “Hola, {nombre} :). Tenemos muchos productos en oferta hoy, ¿qué te gustaría comprar hoy? En {categoría} tenemos 3x2 en marcas seleccionadas. ¿Quieres que te cuente qué marcas son o te interesa otra {categoría}?”
 
 
 
 A: “Quiero comprar algo al crédito, ¿me puedes decir cuánto saldo tengo disponible?”
 
 B: “Ahora tienes {soles} PEN disponibles para ser usados en todos nuestros productos :)”
 
 A: ${capitalization}
 
 B: 
 `;
};
