try{
  const mysql = require("mysql");
  require('dotenv').config(); 
  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    post:process.env.DB_PORT,
  });
  db.connect((err) => {
    if (err) {
      console.error("Database Connection Erorr");
      return;
    }
    console.log("Connected to MySQL database.");
  });
}catch(error){
  console.error(" \x1b[1m error : ~/config/db.config.js \x1b[33m  \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \x1b[0m"+e);
}
module.exports = db;
