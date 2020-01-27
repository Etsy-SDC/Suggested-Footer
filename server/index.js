const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const PORT = 3030;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));
const db = require('../database/index.js');


app.get('/listing', (req, res) => {
  let randomListingId = req.query.listingId;
  console.log(randomListingId);
  db.getImagesFromDb(randomListingId, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});