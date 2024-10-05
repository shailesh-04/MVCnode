try {
const router = require("express").Router();   
const contraller = require('../controllers/_controller.js');
module.exports = (app)=>{
  router.get('/',contraller.index);
  app.use("/",router); 
}
  
} catch (e) {
  console.error(" \x1b[1m error : ~/routes/route.js \x1b[33m  \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \x1b[0m"+e);
}

