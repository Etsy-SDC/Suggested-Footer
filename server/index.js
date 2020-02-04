const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const PORT = 3030;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));
const db = require('../database/index.js');


app.get(`/listing/:listing_id`, (req, res) => {
  //let randomListingId = req.query.listing_Id;
  //console.log(randomListingId);
  console.log('params   ' + req.params.listing_id);
  db.getImagesFromDb(req.params.listing_id, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  })
})

app.get('/update', (req, res) => {
  console.log(req.query.address);
  db.getNewListingId(req.query.address, (error, data) => {
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