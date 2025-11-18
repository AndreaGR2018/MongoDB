✅ Diseño de la base de datos – Catálogo de Productos (MongoDB)
📌 Caso de uso

El caso de uso seleccionado es un catálogo de productos para una tienda online.
Cada producto puede tener:

Variantes (color, talla)

Reseñas de usuarios

Descripción y atributos básicos (precio, stock, categoría)

MongoDB es una elección apropiada porque:

Permite un esquema flexible, ideal para productos con atributos variables.

Facilita almacenar documentos con arrays embebidos (variants, reviews).

Evita la necesidad de múltiples tablas y joins como en SQL.

Permite consultas rápidas por categoría, precio o texto parcial.

📁 Colección principal: products

Cada documento en esta colección representa un producto del catálogo.

📝 Esquema del documento

{
  "_id": "ObjectId",
  "productId": Number,
  "name": "String",
  "category": "String",
  "price": Number,
  "stock": Number,
  "description": "String",
  "variants": [
    {
      "color": "String",
      "size": Number
    }
  ],
  "rating": Number,
  "reviews": [
    {
      "user": "String",
      "comment": "String",
      "stars": Number
    }
  ]
}

📌 Descripción de los campos
Campo	Tipo	Descripción
_id	ObjectId	Identificador interno generado por MongoDB.
productId	Number	ID legible para organización del catálogo.
name	String	Nombre del producto.
category	String	Categoría general (Ropa, Zapatos, etc.).
price	Number	Precio del producto.
stock	Number	Cantidad disponible en inventario.
description	String	Breve descripción del producto.
variants	Array	Lista de variaciones (color, talla).
rating	Number	Promedio de calificaciones de usuarios.
reviews	Array	Comentarios embebidos dentro del producto.
🧩 Decisiones de diseño
✔️ 1. Reseñas embebidas en products

Se almacenan dentro del mismo documento porque:

Son parte natural del producto.

Se leen frecuentemente junto a la información del producto.

Evita joins o lookup innecesarios.

✔️ 2. Variantes dentro de un array

Las variantes cambian según el producto (tallas, colores), por lo que un array embebido permite:

Flexibilidad de estructura

Representar múltiples combinaciones sin tablas adicionales

✔️ 3. Categorías como string simple

No se usa una colección aparte porque:

Los productos solo necesitan filtrar por categoría.

No hay metadatos complejos asociados.

Evita sobre-normalización.

⚡ Índices sugeridos

Para mejorar el rendimiento de las búsquedas:

// Búsquedas por nombre
db.products.createIndex({ name: 1 });

// Filtros combinados: categoría + ordenamiento por precio
db.products.createIndex({ category: 1, price: -1 });

Motivo:

Acelerar búsquedas por nombre parcial o exacto.

Optimizar queries mixtas como:

db.products.find({ category: "Ropa" }).sort({ price: -1 });


🏁 Conclusión

El diseño está optimizado para:

Productos con atributos variables

Reseñas y variantes sin necesidad de tablas adicionales

Consultas de usuario final (precio, categoría, stock, nombre)

Operaciones rápidas en MongoDB gracias a los índices recomendados
