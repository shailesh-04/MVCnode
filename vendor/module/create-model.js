try{
  module.exports = (fileName)=>{
  const fs = require('fs');
  const path = require('path');
  const dirPath = path.join(__dirname,"../../models/"); 
  if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
  }
  console.log(dirPath);
  fs.writeFile(`${dirPath}/${fileName}.model.js`, `try {
    const model = require('./_models.js');
    model.index=(res)=>{
      //Here Type Query 
    }
    module.exports = model;
    } catch (e) {
 console.error(" error : ~/model/${fileName}.model.js ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"+e); 
}
  `, (err) => {
      if (err) {
          return console.error('Error writing file:', err);
      }
      console.log(` New Model Is Created => ${fileName}`);
  });
}
} catch (e) {
  console.error(" \x1b[1m error : ~/vender/module/create-model.js \x1b[33m  \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \x1b[0m"+e);
}
