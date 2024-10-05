try{
  const express = require('express');
  const path  = require('path');
  const app = express();
  app.use(express.json());
  require('dotenv').config(); 
  app.engine('html', require('ejs').renderFile);
  app.set('views', path.join(__dirname, '../','view/'));
  
  require("../routes/_route.js")(app);
  
  app.listen(process.env.PORT,()=>{
    console.log(`server Is Start from \n  \x1b[1m \x1b[33m http://localhost:${process.env.PORT} \x1b[22m`);
  }); 
  
  module.exports = app;
 
} catch (e) {
  console.error(" \x1b[1m error : ~/config/app.config \x1b[33m  \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \x1b[0m"+e);
}
