# ap_backend_ecommerce


| **Module** | **Endpoint**   | **Method** | **Auth** | **Role** | **Description**         |
| ---------------- | -------------------- | ---------------- | -------------- | -------------- | ----------------------------- |
| Auth             | /api/auth/register   | POST             | ❌             | ❌             | Register user                 |
| Auth             | /api/auth/login      | POST             | ❌             | ❌             | Login and get JWT             |
| Products         | /api/products        | GET              | ❌             | ❌             | Get all products              |
| Products         | /api/products/:id    | GET              | ❌             | ❌             | Get single product            |
| Products         | /api/products        | POST             | ✅             | Admin          | Create product                |
| Products         | /api/products/:id    | PUT              | ✅             | Admin          | Update product                |
| Products         | /api/products/:id    | DELETE           | ✅             | Admin          | Delete product                |
| Cart             | /api/cart            | POST             | ✅             | User           | Add item to cart              |
| Cart             | /api/cart            | GET              | ✅             | User           | Get user cart                 |
| Cart             | /api/cart/:itemId    | DELETE           | ✅             | User           | Remove item from cart         |
| Orders           | /api/orders/checkout | POST             | ✅             | User           | Checkout cart → create order |
|                  |                      |                  |                |                |                               |
