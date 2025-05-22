const connection = require("../db");
const questionModel = require('../models/questions.models');

const homepage = (req, res) => {
  res.send('Hello from homepage!');
};

const getQuestionsByYear = (req, res) => {
  const year = req.query.year;

  if (!year) {
    return res.status(400).send('Year query parameter is required');
  }

  questionModel.getQuestionsByYear(year, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.json(results);
  });
};

module.exports = {
  homepage,
  getQuestionsByYear
};
