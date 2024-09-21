try {
const itemsModel= require("../models/models");
const path = require('path');
const filePath = path.join(__dirname, '../public/');
const controller= function(){}
  controller.index = (req,res)=>{
    res.sendFile(filePath+'temp.html');  
  }
module.exports = controller; 

} catch (e) {
  console.error(" \x1b[1m error : ~/controllers/controller.js \x1b[33m  \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \x1b[0m"+e);
}
  