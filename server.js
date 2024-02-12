const express = require("express");

const app = express();

app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

//const userRoute=require()
//
const cors = require("cors");
app.use(cors());

const userRoute = require("./route/userRoute");

const mongoose = require("mongoose");

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Success");
    app.listen(process.env.PORT, (err) => {
      if (err) console.log(err);

      console.log("succesfully connected to port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

app.use(userRoute);

// app.get("/",(req,res)=>{
//     res.send("HEllo");
// });
