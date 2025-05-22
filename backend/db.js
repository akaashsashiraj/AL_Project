// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jathu@6544',
  database: 'All_mcq_database'
}); 

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

module.exports = connection;
