try {
const itemsModel= require("../models/_models");
const controller= function(){}

  controller.index = (req,res)=>{
    res.render('index.html');
  }
module.exports = controller; 

} catch (e) {
  console.error(" \x1b[1m error : ~/controllers/controller.js \x1b[33m  \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \x1b[0m"+e);
}
  
