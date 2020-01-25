const { API_KEY } = require('../config.js');
const { db } = require('./index.js');
const {data} = require('./data.js');

var insertMockData = () => {
    for (let i = 0; i < data.length; i++) {
      let listings = data[i];
      let params = [listings.listing_id, listings.title, listings.creation_tsz];
    //   params.push(listings.user_id);
    //   params.push(listings.listing_id);
    //   params.push(listings.title);
      let queryStr = `INSERT INTO listings (listing_id, title, creation_tsz) VALUES (?, ?, ?);`;
      db.query(queryStr, params, (err, data) => {
        if (err) {
          console.log("error inserting data" + i);
        }
        else {
          console.log("successfully inserted data! " + i);
        }
      });
    }
  };
  insertMockData();