try{
  module.exports = (fileName)=>{
  const fs = require('fs');
  const path = require('path');
  const dirPath = path.join(__dirname,"../../controllers/"); 
  if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
  }
  console.log(dirPath);
  fs.writeFile(`${dirPath}/${fileName}.controller.js`, `try {
    const controller = require('./_controllers');
    controller.index = (req,res)=>{
      res.send('index Controller');
    }
    module.exports = controller;
} catch (e) {
 console.error(" error : ~/controllers/api.controller.js ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"+e); 
}
  `, (err) => {
      if (err) {
          return console.error('Error writing file:', err);
      }
      console.log(` New Controoler Is Created => ${fileName}`);
  });
}
} catch (e) {
  console.error(" \x1b[1m error : ~/vender/module/create-controller.js \x1b[33m  \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \x1b[0m"+e);
}
