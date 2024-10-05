try {
    const controller = require('./_controllers');
    controller.index = (req,res)=>{
      res.send('index Controller');
    }
    module.exports = controller;
} catch (e) {
 console.error(" error : ~/controllers/api.controller.js ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"+e); 
}
  