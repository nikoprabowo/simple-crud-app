// index.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");
const productRoute = require("./routes/product.route.js");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/products", productRoute);

// Root Endpoint
app.get("/", (req, res) => {
  res.send("Hello, Kunkun! The API is alive");
});

// Connect Database & Start Server
const PORT = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  });
