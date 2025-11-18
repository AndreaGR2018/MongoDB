// scripts/basic_queries.js
// Básicas (CRUD) — Ejecutar en Playgrounds o mongosh usando la BD tiendaOnline

// 1) INSERT ONE (insertar producto de prueba)
db.products.insertOne({
  productId: 200,
  name: "Producto Prueba Insert",
  category: "Pruebas",
  price: 49999,
  stock: 15
});

// 2) FIND ONE (buscar un producto por nombre)
const one = db.products.findOne({ name: "Producto 10" });
printjson(one);

// 3) FIND MANY (traer varios productos de la categoría Ropa)
const ropa = db.products.find({ category: "Ropa" }).limit(10).toArray();
printjson(ropa);

// 4) UPDATE ONE (cambiar el precio de Producto 10)
db.products.updateOne(
  { name: "Producto 10" },
  { $set: { price: 65000 } }
);

// 5) UPDATE MANY (incrementar stock +5 a todos los productos de categoría Ropa)
db.products.updateMany(
  { category: "Ropa" },
  { $inc: { stock: 5 } }
);

// 6) DELETE ONE (eliminar el documento de prueba insertado)
db.products.deleteOne({ productId: 200 });
