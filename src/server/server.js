const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Contents = require('./models/contents');

const databaseUrl = process.env.MONGO_DATABASE || 'mongodb://database:27017/diary';
mongoose.connect(databaseUrl, (err, client) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.info('Connected to database');
});

const server = express();
server.use(express.static(path.join('./', 'dist')));
server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.sendFile(path.join('./', 'dist', 'index.html'));
});

server.post('/api/createDiary', (req, res) => {
  const { title, body } = req.body;
  Contents.create({
    title,
    body
  })
  .then(result => {
    console.log(result);
    res.send('Request was accepted');
  })
  .catch(err => {
    console.error(err);
    res.send('Request was refused');
  });
});

server.listen(3000, () => {
  console.log('server running');
});
