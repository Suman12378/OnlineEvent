const app = require("./app");
const mongoose = require("mongoose");

// Config

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config();
  }


  const connectMongo = async() => {
    await  mongoose
   .connect(process.env.MONGO_URL)
   .then(() => {
     console.log("connected to database");
   })
   .catch((err) => {
     console.log(err); 
   });
 };

 connectMongo();

const port = process.env.PORT || 5000; 

app.listen(port, () => {
    console.log(`listen at port number ${port}`);
});
  


