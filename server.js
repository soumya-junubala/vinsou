require("dotenv").config();
const express = require("express");
console.log("Starting server..."); // Log before initializing Express
const app = express();

app.get("/", (req, res) => {
  console.log("Received request at /"); // Log when an API request is made
  res.send("Server is running! 🚀");
  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Backend is running! 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
