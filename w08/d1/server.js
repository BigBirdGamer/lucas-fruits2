//? Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const Fruit = require("./models/fruits");
const fruitsController = require("./controllers/fruits")

//? Config
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://lucaslee98:S98555941e@cluster0.gfjejyc.mongodb.net/lucas-fruits";

mongoose.connect("mongodb+srv://lucaslee98:S98555941e@cluster0.gfjejyc.mongodb.net/lucasfruits");
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//? middleware
app.use(express.urlencoded({ extended: true }));
app.use("/fruits" , fruitsController)


//? listener
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
