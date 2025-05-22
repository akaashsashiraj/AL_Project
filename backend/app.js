const express = require('express');
const routes = require('./routes/questions.routes'); 

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('home page');
});

app.use('/questions',routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
