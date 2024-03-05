const mongoose = require('mongoose');
// const env = require('dotenv');
// const mongoURI = process.env.DATABASE;
// const mongoURI = "mongodb+srv://eValleyDB:hackathon123@cluster0.irkqaqh.mongodb.net/eValleyDB?retryWrites=true&w=majority";
// const link="mongodb+srv://sharmaharshit769:portfolio@cluster0.ofeae87.mongodb.net/social_media"
// const link = "mongodb://localhost:27017/evalley"
const    link="mongodb+srv://sharmaharshit769:portfolio@cluster0.ofeae87.mongodb.net/My-Evalley"

// console.log("hererer: ", process.env.DATABASE);
const connectToMongo = () => {
    mongoose
      .connect(link)
      .then(() => {
        console.log("Connected to Database");
      })
      .catch((err) => {
        console.log("Some error occured in database connection", err);
      });
  };
module.exports = connectToMongo;
