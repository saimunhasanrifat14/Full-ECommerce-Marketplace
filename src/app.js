const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const apiVersion = process.env.API_VERSION || "/api/v1";

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// Routes

// Error hendling middleware
app.use((error, req, res, next) => {
  console.log("error from global error middleware", error);
  res.status(error.statusCode || 500).json({
    message: error.message || "Something went wrong",
    success: false,
    errors: error.errors || [],
  });
});
module.exports = app;
