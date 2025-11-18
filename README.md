# 📦 Tarea MongoDB – Catálogo de Productos

Este repositorio contiene el diseño, implementación y análisis de una base de datos NoSQL en **MongoDB**, utilizando como caso de uso un **catálogo de productos** para una tienda en línea.

El proyecto incluye:
- Diseño del modelo de datos.
- Inserción de 100 productos generados dinámicamente.
- Consultas básicas, consultas con filtros y consultas de agregación.
- Documentación y análisis de resultados.

---

## 🚀 Objetivo de la actividad

Aplicar los conceptos fundamentales de MongoDB:

- Modelado y diseño de bases de datos NoSQL.
- Manipulación de documentos (CRUD).
- Uso de filtros y operadores avanzados.
- Construcción de pipelines de agregación para extraer métricas.
- Organización y documentación profesional de un proyecto.

---

## 📁 Estructura del repositorio

/
├── design.md # Diseño del esquema, colecciones y documentos
├── scripts/ # Scripts ejecutables en MongoDB Playground o mongosh
│ ├── insert_100_products.js
│ ├── basic_queries.js
│ ├── filters_queries.js
│ └── aggregation_queries.js
├── docs/
│ ├── analysis.md # Análisis de resultados de agregación
│ └── capturas/ # Evidencias (capturas de salida en Atlas/Playground)
└── README.md


---

## 🛠️ Requisitos

- Cuenta activa en **MongoDB Atlas**
- Conexión a un **Cluster** con la base de datos `tiendaOnline`
- Uso de **MongoDB Playground** (recomendado) o **mongosh**

---

## ▶️ Cómo ejecutar los scripts

1. Abrir MongoDB Atlas → Cluster → **Collections**.
2. Asegurarte de que exista la base de datos `tiendaOnline` y la colección `products`.
3. Ir a **Playgrounds**.
4. Copiar cualquier script desde la carpeta `scripts/`:
   - `insert_100_products.js` para cargar los 100 productos.
   - `basic_queries.js` para operaciones CRUD.
   - `filters_queries.js` para filtros y operadores.
   - `aggregation_queries.js` para estadísticas.
5. Ejecutar con el botón **Run**.

---

## 🖼️ Evidencias

Las capturas del funcionamiento del proyecto (inserciones, consultas, resultados de agregaciones) se encuentran en:

docs/capturas/


---

## 📝 Notas finales

Este repositorio cumple con los requisitos de la actividad solicitada:  
✔ Diseño del modelo  
✔ Inserción masiva de datos  
✔ Consultas básicas  
✔ Consultas avanzadas  
✔ Agregaciones  
✔ Documentación y análisis  
