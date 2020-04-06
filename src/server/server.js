const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.join('./', 'dist')));

server.get('/', (req, res) => {
  res.sendFile(path.join('./', 'dist', 'index.html'));
})

server.listen(3000, () => {
  console.log('server running');
});
