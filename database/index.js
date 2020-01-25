const { database_password } = require('../config.js');

const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : `${database_password}`,
  database : 'etsy_suggested'
});
 
db.connect();


module.exports = { db };


