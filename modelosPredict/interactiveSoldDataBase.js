module.exports = (data) => {
  console.log(data);
  const capitalization = data[0].toUpperCase() + data.slice(1).toLowerCase();
  return ` Productos

  - Celulares:
      - iPhone 13
          - Stock: 3
          - Precio: $3000
      - Samsung S20
          - Stock: 4
          - Precio: $3500
      - Xiaomi Mi 11
          - Stock: 5
          - Precio: $3200
  - Tablet:
      - iPad Pro 12
          - Stock: 2
          - Precio: $3100
      - Samsung T8
          - Stock: 1
          - Precio: $3300
  - Laptops:
      - Macbook air M1
          - Stock: 4
          - Precio: $6000
      - HP Omen
          - Stock: 2
          - Precio: $6500
  
  Cliente: “Quiero saber qué productos tienen disponibles?”
  
  Respuesta: Tenemos celulares, tablets y laptops disponibles en diferentes marcas.
  
  Cliente: “Quiero saber qué celulares tienen disponibles?”
  
  Respuesta: Tenemos 3 iPhone 13, 4 Samsung S20 y 5 Xiaomi Mi 11.
  
  Cliente: “Quisiera saber qué medias tienen disponibles?”
  
  Respuesta: No vendemos medias disculpa
  
  Cliente: “Quisiera saber cuál es el stock de laptops?”
  
  Respuesta: Tenemos 4 Macbook Air M1 y 2 HP Omen
  
  Cliente: “Quisiera saber cuántas laptops tienen disponibles?”
  
  Respuesta: Tenemos 4 Macbook Air M1 y 2 HP Omen
  
  Cliente: “Quiero comprar 2 iPhone 13 y 1 Xiaomi”
  
  Respuesta: El precio de los 2 iPhone 13 es de $6000 y el Xiaomi Mi 11 es de $3200. El precio total es de $9200.
  
  Cliente: “Ya, perfecto quiero comprar 2 iPhone 13”
  
  Respuesta: “Perfecto, enviamos 2 iPhone 13 con total a pagar de $6000 a tu dirección”
  
  Cliente: “Hola quiero ordenar algo para mi esposo”
  
  Respuesta: “¿Qué desea ordenar para su esposo?”
  
  Cliente: ${capitalization}
  
  Respuesta:
    `;
};
