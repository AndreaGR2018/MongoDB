Diseño de la base de datos
Caso de uso

Catálogo de productos para una tienda online: productos con atributos variables (tallas, colores, variantes), reseñas embebidas y operaciones de búsqueda/filtrado por precio, categoría y stock. MongoDB es apropiado por su esquema flexible y facilidad para almacenar documentos con arrays (variants, reviews).

Colecciones

products

_id : ObjectId

productId : Number (opcional, identificador legible)

name : String

category : String

price : Number

stock : Number

description : String

variants : Array (e.g. [{ color: "Negro", size: 42 }])

rating : Number

reviews : Array (e.g. [{ user: "Carlos", comment: "...", stars: 5 }])

Decisiones de diseño

Reseñas embebidas en products para consultas habituales de lectura de producto.

Variantes en array para representar colores/tallas.

No se normalizan categorías (se usaría una colección aparte solo si fueran metadatos compartidos o reglas complejas).

Índices sugeridos
db.products.createIndex({ name: 1 });
db.products.createIndex({ category: 1, price: -1 });

Motivo: acelerar búsquedas por nombre y filtros por categoría + ordenamiento por precio.
