const mysql = require('mysql');

// create connection
const connection = mysql.createConnection({
  host: 'localhost',     // XAMPP default host
  user: 'root',          // XAMPP default user
  password: '',          // XAMPP default password is empty
  database: 'testdb'     // your database name (create it in phpMyAdmin)
});

// connect
connection.connect((err) => {
  if (err) {
    console.error('❌ Error connecting: ' + err.stack);
    return;
  }
  console.log('✅ Connected as id ' + connection.threadId);
});

// simple query test
connection.query('SELECT NOW() AS now', (err, rows) => {
  if (err) throw err;
  console.log('Current time:', rows[0].now);
  connection.end();
});
