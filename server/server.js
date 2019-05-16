const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use('/build', express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/testDev', (req, res) => {
  console.log('hi');
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));
