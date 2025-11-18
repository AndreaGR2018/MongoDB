## scripts/filters_queries.js

use tiendaOnline;

// 1) Precio mayor a 100000 db.products.find({ price: { $gt: 100000 } }).limit(10).toArray();

// 2) Precio entre 60k y 120k db.products.find({ price: { $gte: 60000, $lte: 120000 } }).limit(10).toArray();

// 3) Filtrar por categoría Ropa o Zapatos db.products.find({ category: { $in: ["Ropa", "Zapatos"] } }).limit(10).toArray();

// 4) Buscar por nombre parcial con regex (case insensitive) db.products.find({ name: { $regex: "^Producto 1", $options: "i" } }).toArray();

// 5) Combinar condiciones: categoria Ropa Y stock > 20 db.products.find({ $and: [{ category: "Ropa" }, { stock: { $gt: 20 } }] }).limit(10).toArray();

// 6) Proyección: mostrar solo name y price db.products.find({}, { projection: { name: 1, price: 1, _id: 0 } }).limit(10).toArray();

// 7) Sort y Limit: top 5 más caros db.products.find({}, { projection: { name:1, price:1, _id:0 } }).sort({ price: -1 }).limit(5).toArray();
