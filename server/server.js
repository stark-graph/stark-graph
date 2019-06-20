const express = require('express');

const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/'));
});

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);
