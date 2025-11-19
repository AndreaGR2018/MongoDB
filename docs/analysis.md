## 1. Conteo por categoría

### Pipeline
```js
[
  { $group: { _id: "$category", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
] 
```

Resultado
```json
[
  { "_id": "Ropa", "total": 52 },
  { "_id": "Zapatos", "total": 50 }
]
```

Interpretación del resultado
La categoría "Ropa" contiene 52 productos, mientras que "Zapatos" contiene 50.
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

Los precios mínimos y máximos muestran que Zapatos tiene mayor rango de precios.

Esto indica que los zapatos son generalmente más caros y tienen más variación de precio que la ropa.


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

La suma total de stock de todos los productos es 1,727 unidades.

Esto indica que, en conjunto, el inventario tiene suficiente disponibilidad para las ventas actuales.

Se podría usar esta cifra para planificar reabastecimientos o promociones de productos con menor stock.

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

Todos los productos más caros son de la categoría Zapatos.

El precio más alto es 165,000 y el más bajo dentro del top 5 es 160,000.

Esto indica que los zapatos tienden a tener precios elevados y una mayor variación en el rango superior.

Estrategia recomendada: se podrían promover ofertas o bundles de zapatos de alto valor para maximizar ventas.


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

La mayoría de los productos (48) se encuentran en el rango de 50,000–79,999, con un promedio cercano a 63,479.

Hay 32 productos entre 120,000–159,999, y 7 productos muy caros entre 160,000–199,999.

Solo 2 productos están por debajo de 50,000.

Esto indica que la tienda tiene un inventario más concentrado en precios medios, con pocos productos muy baratos o muy caros. La distribución puede ayudar a decidir promociones según los rangos de precio y orientar la estrategia de marketing.
