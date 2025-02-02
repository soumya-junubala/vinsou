const express = require("express");

console.log("Starting server...");

const app = express();

app.get("/", (req, res) => {
  console.log("Received request at /");
  res.send("Server is running! 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
