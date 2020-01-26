const { API_KEY } = require('../config.js');
const { db } = require('./index.js');
const {data} = require('./data.js');
const axios = require('axios');

var insertMockData = () => {
    for (let i = 0; i < data.length; i++) {
      let listings = data[i];
      let randomCategory = Math.floor(Math.random() * 10) + 1;
      let params = [listings.listing_id, listings.title, listings.creation_tsz, randomCategory];
      let queryStr = `INSERT INTO listings (listing_id, title, creation_tsz, category) VALUES (?, ?, ?, ?);`;
      db.query(queryStr, params, (err, data) => {
        if (err) {
          console.log(err + i);
        }
        else {
          console.log("successfully inserted data! " + i);
        }
      });
    }
  };
  //insertMockData();

  const insertImageData = () => {
    let i = 0;
  
    function addImage() {
      axios.get(`https://openapi.etsy.com/v2/listings/${data[i].listing_id}/images?api_key=${API_KEY}`).then(result => {
        let imageUrl = result.data.results[0].url_170x135;
        let listingId = result.data.results[0].listing_id;
        let params = [imageUrl, listingId];
        let queryStr = `UPDATE listings SET imageURL = ? WHERE listing_id = ?;`;
        db.query(queryStr, params, (err, data) => {
          if (err) {
            console.log("error inserting imageUrl" + i);
          }
          else {
            console.log("successfully inserted imageUrl! " + i);
          }
        });
      }).then(() => {
        i++;
        if (i < 100) {
          setTimeout(addImage, 1000);
        }
      })
      .catch(err => {
        console.log(err);
        i++;
        if (i < 100) {
          setTimeout(addImage, 1000);
        }
      })
    }
    addImage();
  }
  insertImageData();