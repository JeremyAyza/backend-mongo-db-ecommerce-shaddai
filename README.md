<h1 align="center">🛒 Tienda Virtual - Fullstack E-commerce</h1>
<p align="center">Aplicación completa de e-commerce construida con Node.js, Express, MongoDB, React y Stripe para pagos. Permite gestionar productos, compras, usuarios y órdenes desde el backend y el frontend.</p>

<p align="center">
  <a href="https://reactjs.org"><img src="https://img.shields.io/badge/React-18-blue?logo=react" /></a>
  <a href="https://redux.js.org"><img src="https://img.shields.io/badge/Redux-State-purple?logo=redux" /></a>
  <a href="https://expressjs.com"><img src="https://img.shields.io/badge/Express-4.x-lightgrey?logo=express" /></a>
  <a href="https://www.mongodb.com"><img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb" /></a>
  <a href="https://stripe.com"><img src="https://img.shields.io/badge/Stripe-Payments-6772e5?logo=stripe" /></a>
</p>

---

### 📦 Tech Stack

#### 🧠 Backend

| Tecnología        | Descripción                        |
| ----------------- | ---------------------------------- |
| **Node.js**       | Entorno de ejecución para JS       |
| **Express.js**    | Framework backend para API REST    |
| **MongoDB + Mongoose** | Base de datos NoSQL + ODM   |
| **JWT**           | Autenticación basada en tokens     |
| **bcryptjs**      | Hashing de contraseñas             |
| **Stripe**        | Pagos y Checkout seguro            |
| **Nodemailer**    | Envío de correos (ej. confirmación de pedidos) |

#### 🎨 Frontend

| Tecnología         | Descripción                         |
| ------------------ | ----------------------------------- |
| **React 18**       | Librería para UI moderna y reactiva |
| **React Router**   | Ruteo de SPA                        |
| **Redux + Thunk**  | Manejo global de estado asincrónico |
| **React Bootstrap**| Componentes de UI responsivos       |
| **Stripe Checkout**| Integración de pagos desde frontend |
| **Axios**          | Cliente HTTP para consumir la API   |
| **React Toastify** | Notificaciones elegantes            |

---

### ✨ Funcionalidades

- 🛍️ Catálogo de productos por categoría
- 👥 Registro y login de usuarios con JWT
- 📦 CRUD de productos, órdenes y proveedores
- 🧾 Gestión de órdenes de compra y venta
- 💳 Pago de productos vía **Stripe Checkout**
- 🔒 Rutas protegidas para usuarios autenticados
- 💬 Notificaciones de éxito/error con React Toastify

---

### 📁 Entidades principales

| Entidad           | Descripción                              |
| ----------------- | ---------------------------------------- |
| **User**          | Usuarios registrados                     |
| **Product**       | Productos disponibles en la tienda       |
| **Category**      | Clasificación de productos               |
| **Provider**      | Proveedores de productos                 |
| **Purchase**      | Compras realizadas a proveedores         |
| **Order**         | Órdenes generadas por clientes           |

---

### 🧠 Retos y Aprendizajes

- Integración completa del flujo de pago usando Stripe
- Arquitectura clara y separada por capas en el backend
- Uso de redux-thunk para manejar operaciones asíncronas como login, registro y gestión de órdenes
- Validaciones robustas de inputs con express-validator
- Modularización de rutas, middlewares y controladores en Express
