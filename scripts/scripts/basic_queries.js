## scripts/basic_queries.js
// Basic queries -- ejecutar en Playgrounds o mongosh (usar tiendaOnline) use tiendaOnline;

// 1) INSERT db.products.insertOne({ productId: 200, name: "Producto Prueba Insert", category: "Pruebas", price: 49999, stock: 15 });

// 2) FIND (traer uno por name) const one = db.products.findOne({ name: "Producto 10" }); printjson(one);

// 3) FIND (traer varios, ejemplo: ropa) const ropa = db.products.find({ category: "Ropa" }).limit(10).toArray(); printjson(ropa);

// 4) UPDATE (cambiar price de Producto 10) db.products.updateOne({ name: "Producto 10" }, { $set: { price: 65000 } });

// 5) UPDATE MANY (incrementar stock en +5 a toda la categoría Ropa) db.products.updateMany({ category: "Ropa" }, { $inc: { stock: 5 } });

// 6) DELETE (eliminar el documento de prueba insertado) db.products.deleteOne({ productId: 200 });
