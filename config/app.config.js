module.exports = (app)=>{
require('dotenv').config(); 
app.use(express.json());
require("./routes/route.js")(app);
app.listen(process.env.PORT,()=>{
  console.log(`server Is Start from \n  \x1b[1m \x1b[33m http://localhost:${process.env.PORT} \x1b[22m`);
});  
}
