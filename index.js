const express = require('express');
const { ssr } = require('./views/ssr');

const app = express();

app.listen(3000);

app.use(express.static('assets'));

app.get('/', (_, res) => {
  const response = ssr();
  res.send(response);
});

app.get('/user', (_, res) => {
  res.send('hoge');
});