const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const databaseUrl = process.env.MONGO_DATABASE || '';
mongoose.connect(databaseUrl, (err, client) => {
  if (err) console.error(err);
});

const server = express();
server.use(express.static(path.join('./', 'dist')));

server.get('/', (req, res) => {
  res.sendFile(path.join('./', 'dist', 'index.html'));
});

server.listen(3000, () => {
  console.log('server running');
});
