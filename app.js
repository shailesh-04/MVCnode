try {
const express = require('express');
const app = express();
require('dotenv').config(); 
app.use(express.json());
require("./routes/route.js")(app);
app.listen(process.env.PORT,()=>{
  console.log(`server Is Start from \n  \x1b[1m \x1b[33m http://localhost:${process.env.PORT} \x1b[22m`);
}); 
} catch (e) {
  console.error(" \x1b[1m error : ~/app.js \x1b[33m  \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \x1b[0m"+e);
}