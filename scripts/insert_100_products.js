// scripts/insert_100_products.js
// Insertar 100 documentos de prueba en la BD tiendaOnline

use tiendaOnline;

const products = [];
const categories = ["Ropa", "Zapatos"];

for (let i = 1; i <= 100; i++) {
  const category = categories[i % 2];
  const price = 50000 + (i % 20) * 5000 + (Math.floor(i / 10) * 1000);
  const stock = 5 + (i % 30);

  products.push({
    productId: i,
    name: `Producto ${i}`,
    category: category,
    price: price,
    stock: stock,
    description: `Descripción del producto ${i}`,
    variants: [
      {
        color: (i % 2 === 0 ? "Negro" : "Blanco"),
        size: 38 + (i % 7)
      }
    ],
    rating: Number((3 + (i % 3) + Math.random()).toFixed(1)),
    reviews: [
      {
        user: `Usuario${i}`,
        comment: "Buen producto",
        stars: (i % 5) + 1
      }
    ]
  });
}

db.products.insertMany(products);
