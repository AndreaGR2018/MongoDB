Análisis de Agregaciones – MongoDB

1. Conteo por categoría

Pipeline
[
  { $group: { _id: "$category", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]

Resultado
[
  { "_id": "Ropa", "total": 52 },
  { "_id": "Zapatos", "total": 50 }
]

Interpretación del resultado

La categoría Ropa contiene 52 productos, mientras que Zapatos contiene 50.
Esto muestra una distribución casi equilibrada en el inventario, con una ligera mayor oferta de ropa.

2. Promedio, mínimo y máximo de precio por categoría

Pipeline
[
  { 
    $group: { 
      _id: "$category", 
      avgPrice: { $avg: "$price" }, 
      minPrice: { $min: "$price" }, 
      maxPrice: { $max: "$price" } 
    } 
  },
  { $sort: { avgPrice: -1 } }
]

Resultado
[
  {
    "_id": "Zapatos",
    "avgPrice": 135540,
    "minPrice": 90000,
    "maxPrice": 165000
  },
  {
    "_id": "Ropa",
    "avgPrice": 64211.54,
    "minPrice": 45000,
    "maxPrice": 120000
  }
]

Interpretación del resultado

La categoría Zapatos tiene un promedio de precio más alto (135,540) que Ropa (64,211.54).

Zapatos también presenta un rango mayor de precios.

Esto indica que los zapatos suelen ser más costosos y tienen más variaciones de precio que la ropa.

3. Suma total de stock

Pipeline
[
  { $group: { _id: null, totalStock: { $sum: "$stock" } } }
]

Resultado
[
  {
    "_id": null,
    "totalStock": 1727
  }
]

Interpretación del resultado

El inventario total suma 1,727 unidades.

Esta cantidad indica buena disponibilidad general.

Los administradores pueden usar esta información para decidir si es necesario reabastecer o redistribuir productos.

4. Top 5 productos más caros

Pipeline
[
  { $sort: { price: -1 } },
  { $limit: 5 },
  { $project: { name: 1, price: 1, category: 1, _id: 0 } }
]

Resultado
[
  { "name": "Producto 75", "category": "Zapatos", "price": 165000 },
  { "name": "Producto 99", "category": "Zapatos", "price": 162000 },
  { "name": "Producto 35", "category": "Zapatos", "price": 162000 },
  { "name": "Producto 55", "category": "Zapatos", "price": 160000 },
  { "name": "Producto 67", "category": "Zapatos", "price": 160000 }
]

Interpretación del resultado

Todos los productos más caros pertenecen a la categoría Zapatos.

El precio más alto es 165,000 y el más bajo del top 5 es 160,000.

Esto muestra que los zapatos dominan el rango premium y pueden generar más ingresos por venta.

Recomendación: ofrecer bundles o promociones de zapatos de gama alta.

5. Distribución de precios (buckets)

Pipeline
[
  { 
    $bucket: { 
      groupBy: "$price", 
      boundaries: [0, 50000, 80000, 120000, 160000, 200000], 
      default: "200000+", 
      output: { 
        count: { $sum: 1 }, 
        avgPrice: { $avg: "$price" } 
      } 
    } 
  }
]

Resultado
[
  { "_id": 0, "count": 2, "avgPrice": 46000 },
  { "_id": 50000, "count": 48, "avgPrice": 63479.17 },
  { "_id": 80000, "count": 13, "avgPrice": 104923.08 },
  { "_id": 120000, "count": 32, "avgPrice": 140125 },
  { "_id": 160000, "count": 7, "avgPrice": 161285.71 }
]

Interpretación del resultado

La mayoría de los productos (48) están en el rango de 50,000–79,999, con un precio promedio de 63,479.

32 productos se encuentran en el rango 120,000–159,999, mostrando que hay una fuerte presencia en precios medios-altos.

Solo 2 productos tienen precios menores a 50,000.

Esto sugiere que la tienda se enfoca más en productos de gama media y alta, lo cual influye en estrategias de precio, marketing y ventas.
