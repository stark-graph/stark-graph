const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use("/", express.static(path.resolve(__dirname, "../public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);
