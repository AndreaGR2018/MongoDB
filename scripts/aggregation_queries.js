// scripts/aggregation_queries.js
// Consultas de Agregación — Ejecutar en Playgrounds o mongosh usando la BD tiendaOnline

use tiendaOnline;

// ------------------------------------------------------------
// 1) Contar productos por categoría
// ------------------------------------------------------------
const countByCategory = db.products.aggregate([
  { 
    $group: { 
      _id: "$category",
      total: { $sum: 1 }
    }
  },
  { $sort: { total: -1 } }
]).toArray();

printjson(countByCategory);

// ------------------------------------------------------------
// 2) Promedio, mínimo y máximo de precio por categoría
// ------------------------------------------------------------
const avgPrice = db.products.aggregate([
  { 
    $group: { 
      _id: "$category",
      avgPrice: { $avg: "$price" },
      minPrice: { $min: "$price" },
      maxPrice: { $max: "$price" }
    }
  },
  { $sort: { avgPrice: -1 } }
]).toArray();

printjson(avgPrice);

// ------------------------------------------------------------
// 3) Suma total del stock de todos los productos
// ------------------------------------------------------------
const totalStock = db.products.aggregate([
  {
    $group: {
      _id: null,
      totalStock: { $sum: "$stock" }
    }
  }
]).toArray();

printjson(totalStock);

// ------------------------------------------------------------
// 4) Top 5 productos más caros
// ------------------------------------------------------------
const top5 = db.products.aggregate([
  { $sort: { price: -1 } },
  { $limit: 5 },
  { 
    $project: { 
      name: 1,
      price: 1,
      category: 1,
      _id: 0
    }
  }
]).toArray();

printjson(top5);

// ------------------------------------------------------------
// 5) Distribución de precios (Buckets)
// ------------------------------------------------------------
const buckets = db.products.aggregate([
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
]).toArray();

printjson(buckets);
