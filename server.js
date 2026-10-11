const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Read JSON data sent by the frontend
app.use(express.json());

// Serve our existing website files
app.use(express.static(__dirname));

// Test route
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Tech Nexora backend is running!"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Tech Nexora server running at http://localhost:${PORT}`);
});
