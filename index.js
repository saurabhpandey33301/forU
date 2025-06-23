const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "src")));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Route: GET /
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});
app.get("/dark", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
