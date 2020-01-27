const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const PORT = 3030;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));


app.get('/suggested', (req, res) => {
  console.log('successful get request');
  res.send();
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});