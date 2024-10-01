require("dotenv").config();


const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const router = express.Router();
mongoose.connect(process.env.MONGODB_URI)
app.get("/", (req,res) => {
    res.send("Cars app Home Page");
})
app.post("/cars", (req,res) => {
    console.log(req.body, "this is the req.body")
});
const car = await Fruit.creat(req.body)
res.json(fruit);
// server.js the connection
mongoose.connection.on("connected", () => {
    comsole.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
mongoose.connection.on("error",(err) => {
    console.log(`failed to connect${err}.`);

});
//const Car = require("./models/car.js");
const carRoutes = require("./routes/cars");
app.use("cars", carRoutes);


//GET and route
const Car = require("./models/car.js");
app.get("/", (req, res) => {
    res.send("Cars app Home page")
});


app.listen(3000, () => {
    console.log("building a CRUD cars app using port 3000");
});