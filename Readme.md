# MERN eCommerce Platform

A full‑stack MERN‑based eCommerce platform featuring secure authentication, role‑based admin controls, PayPal integration, and full product/order/cart workflows.

**Live Demo**

- Frontend: https://ecommerce-1-h2ap.onrender.com
- Backend API: https://ecommerce-xg63.onrender.com

## Overview

This eCommerce app provides a modern shopping experience with real-time cart, secure checkout, and a complete admin dashboard.

- **Users** can browse and filter products, manage their cart and addresses, make payments via PayPal, and track orders.
- **Admins** can manage products, users, and orders, including image uploads via Cloudinary.

## Features

- JWT + refresh token authentication
- Role‑based access control (Admin / User)
- Admin dashboard for managing products, orders, and users
- Secure image upload with Multer and Cloudinary
- PayPal checkout integration
- Product reviews, ratings, and filtering
- Cart, shipping address, and order history management

## Tech Stack

**Frontend:** React (v19), Vite, Tailwind CSS, Redux Toolkit, React Router v7, Axios, shadcn/ui, Lucide Icons  
**Backend:** Node.js, Express.js, MongoDB, Mongoose, jsonwebtoken, cookie-parser, bcryptjs, Multer, Cloudinary, PayPal REST SDK, dotenv

## Project Structure

```
Ecommerce/
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── config/
│       ├── hooks/
│       ├── lib/
│       ├── pages/
│       ├── store/
│       ├── App.jsx
│       └── main.jsx
│   ├── .env
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Express backend
│   ├── controllers/
│   ├── helpers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md               # Project documentation
```

## Routes & Endpoints

**Auth**

- `POST /api/auth/register` — Register
- `POST /api/auth/login` — Login
- `POST /api/auth/logout` — Logout
- `GET /api/auth/check-auth` — Verify access token

**Shop (Products, Cart, Orders, Address, Reviews)**

- `GET /api/shop/products/get` — Get all products
- `GET /api/shop/products/:id` — Get product details
- `GET /api/shop/search/:keyword` — Product search
- `POST /api/shop/cart/add` — Add to cart
- `GET /api/shop/cart/get/:userId` — Get cart items
- `PUT /api/shop/cart/update-cart` — Update cart item
- `DELETE /api/shop/cart/:userId/:productId` — Remove item
- `POST /api/shop/address/add` — Add address
- `GET /api/shop/address/get/:userId` — Get addresses
- `PUT /api/shop/address/update/:userId/:addressId` — Update address
- `DELETE /api/shop/address/delete/:userId/:addressId` — Delete address
- `POST /api/shop/order/create` — Create order
- `POST /api/shop/order/capture` — Capture PayPal payment
- `GET /api/shop/order/list/:userId` — Get all orders
- `GET /api/shop/order/details/:id` — Get order details
- `POST /api/shop/review/add` — Add review
- `GET /api/shop/review/:productId` — Get reviews

**Admin (Products & Orders)**

- `POST /api/admin/products/upload-image`
- `POST /api/admin/products/add`
- `GET  /api/admin/products/get`
- `PUT  /api/admin/products/edit/:id`
- `DELETE /api/admin/products/delete/:id`
- `GET  /api/admin/orders/get`
- `GET  /api/admin/orders/details/:id`
- `PUT  /api/admin/orders/update/:id`

## Quick Installation

1. **Clone**

   ```bash
   git clone https://github.com/your-username/ecommerce-mern.git
   cd ecommerce-mern
   ```

2. **Backend**

   ```bash
   cd server
   npm install
   # create .env with MONGODB_URI, JWT_ACCESS_SECRET, JWT_REFRESH_SECRET, PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, CLOUDINARY_*, CLIENT_BASE_URL
   npm run dev
   ```

3. **Frontend**

   ```bash
   cd ../client
   npm install
   npm run dev
   ```

## Author

Prakhar Mishra  
GitHub: https://github.com/PrakharMishra639  
LinkedIn: https://www.linkedin.com/in/prakhar-mishra123  
Email: mprakhar713@gmail.com
