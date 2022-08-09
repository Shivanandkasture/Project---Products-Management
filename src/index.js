//============================[Requirements]========================
const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const mongoose = require("mongoose");
const multer = require("multer");
const app = express();

app.use(bodyParser.json());
app.use(multer().any())

// =============================[ Connect DataBase ]=========================
mongoose
  .connect(
    "mongodb+srv://shivanandkasture:GrjERPPxK02MvUW6@cluster0.a35v6.mongodb.net/Product-Mangement-DB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("database is connected"))
  .catch((err) => console.log(err.message));

app.use("/", route);


app.listen( 3000, function () {
  console.log("Express app is running on port" +  3000);
});
