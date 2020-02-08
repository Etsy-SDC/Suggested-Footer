const { database_password } = require("../config.js");

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "suggested.cqinvymyubmg.us-east-2.rds.amazonaws.com",
  user: "root",
  password: `password`,
  database: "etsy_suggested"
});

db.connect();

const getImagesFromDb = (imageId, callback) => {
  const randomCategory = Math.floor(Math.random() * 6);
  //const queryString = `SELECT imageURL, title, company_name, price, listing_id FROM listings WHERE category = (SELECT category FROM listings WHERE listing_id = '${imageId}') ORDER BY RAND();`
  const queryString = `SELECT imageURL, title, company_name, price, listing_id FROM listings WHERE listing_id != '${imageId}' ORDER BY RAND() LIMIT 15;`;
  db.query(queryString, function(error, result) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  db,
  getImagesFromDb
};
