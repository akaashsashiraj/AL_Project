const connection = require('../db'); // your DB connection module;


const getQuestionsByYear = (year, callback) => {
  const sql = 'SELECT * FROM physics_questions WHERE year = ?';
  connection.query(sql, [year], (err, results) => {
    callback(err, results);
  });
};

module.exports = {
  getQuestionsByYear,
};
