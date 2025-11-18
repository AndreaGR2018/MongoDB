// scripts/filters_queries.js
// Consultas con filtros y operadores — Ejecutar en Playgrounds o mongosh

use tiendaOnline;

// ------------------------------------------------------------
// 1) Precio mayor a 100000
// ------------------------------------------------------------
db.products.find(
  { price: { $gt: 100000 } }
).limit(10).toArray();

// ------------------------------------------------------------
// 2) Precio entre 60000 y 120000
// ------------------------------------------------------------
db.products.find(
  { price: { $gte: 60000, $lte: 120000 } }
).limit(10).toArray();

// ------------------------------------------------------------
// 3) Filtrar por categoría: Ropa o Zapatos
// ------------------------------------------------------------
db.products.find(
  { category: { $in: ["Ropa", "Zapatos"] } }
).limit(10).toArray();

// ------------------------------------------------------------
// 4) Buscar por nombre parcial con regex (case insensitive)
// ------------------------------------------------------------
db.products.find(
  { name: { $regex: "^Producto 1", $options: "i" } }
).toArray();

// ------------------------------------------------------------
// 5) Combinar condiciones: categoría Ropa Y stock > 20
// ------------------------------------------------------------
db.products.find({
  $and: [
    { category: "Ropa" },
    { stock: { $gt: 20 } }
  ]
}).limit(10).toArray();

// ------------------------------------------------------------
// 6) Proyección: mostrar solo name y price
// ------------------------------------------------------------
db.products.find(
  {},
  { projection: { name: 1, price: 1, _id: 0 } }
).limit(10).toArray();

// ------------------------------------------------------------
// 7) Sort + Limit: top 5 productos más caros
// ------------------------------------------------------------
db.products.find(
  {},
  { projection: { name: 1, price: 1, _id: 0 } }
).sort({ price: -1 }).limit(5).toArray();
