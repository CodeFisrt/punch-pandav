const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// DB connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',       // add password if you set one
  database: 'testdb'  // change to your database
});

// connect
db.connect(err => {
  if (err) {
    console.error('❌ DB connection error:', err);
    return;
  }
  console.log('✅ MySQL Connected!');
});

// simple API
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
