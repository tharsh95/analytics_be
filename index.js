require("dotenv").config();
const express = require("express");
const db = require("./db");
const cors = require('cors')

const app = express();
app.use(cors())
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to My Node.js App with MySQL!");
});

app.get("/two", (req, res) => {
  db.query("SELECT * FROM two", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});
app.get("/four", (req, res) => {
  db.query("SELECT * FROM four", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});
app.get("/six", (req, res) => {
  db.query("SELECT * FROM six", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
