const express = require('express');
const morgan = require('morgan');
const path = require('path');
const template = require('./template.js');
const port = process.env.PORT || 1337;

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/restaurant/:restaurantId', (req, res) => {
  let restaurantId = req.params.restaurantId;
  res.status(200).send(template(restaurantId));
})

app.listen(port, () => {
  console.log(`proxy listening in: http://localhost:${port}`);
});