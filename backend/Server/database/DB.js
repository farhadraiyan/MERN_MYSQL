const mysql = require("mysql");
const db = require('./config');
dbPool = mysql.createPool(db.config);


module.exports = dbPool;