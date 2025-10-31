# Simple CRUD API with Node.js + Express + MongoDB

This is a simple, modular, and production-ready **RESTful API** built with  
**Node.js**, **Express**, and **MongoDB (Mongoose)**. This project is a simple but production-style backend structure. It supports full **CRUD operations** and can be easily extended for larger systems such as e-commerce, banking transactions, or data engineering pipelines.

---

## Features

- CRUD operations for products (`GET`, `POST`, `PUT`, `DELETE`)
- Express REST API routes
- Clean MVC architecture (Model–Controller–Route)
- Centralized MongoDB connection using Mongoose
- Environment variables via `.env`
- JSON body parsing and error handling
- Nodemon for auto-restart during development
- Ready to be deployed to MongoDB Atlas or any cloud server

---

## Project Structure

```bash
simple-crud-app/
├─ config/
│ └─ db.js
├─ controllers/
│ └─ product.controller.js
├─ models/
│ └─ product.model.js
├─ routes/
│ └─ product.route.js
├─ .env
├─ .gitignore
├─ index.js
├─ package.json
└─ README.md
```

---

## Installation & Setup

### 1️. Clone this repository

```bash
git clone https://github.com/nikoprabowo/simple-crud-app.git
cd simple-crud-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a .env file in the project root:

```bash
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/Node-API
```

### 4. Run the server

For development (auto-reload using Nodemon):

```bash
npm run dev
```

Or run normally:

```bash
npm run serve
```

Server will start at:
http://localhost:3000

## API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/products`     | Get all products   |
| GET    | `/api/products/:id` | Get single product |
| POST   | `/api/products`     | Create new product |
| PUT    | `/api/products/:id` | Update a product   |
| DELETE | `/api/products/:id` | Delete a product   |

## Technologies Used

- Node.js – JavaScript runtime
- Express.js – Web framework
- MongoDB – NoSQL database
- Mongoose – ODM for MongoDB
- Dotenv – Environment configuration
- Nodemon – Development auto-restart

## Future Plans

- Add Customers, Accounts, and Transactions collections
- Integrate MongoDB Atlas
- Implement Change Data Capture (CDC) simulation
- Connect to Data Engineering ETL pipeline

## Author

Niko Prabowo |
[LinkedIn](https://www.linkedin.com/in/nikoprabowo/) |
[Medium](https://medium.com/@nikoberwibowo)
