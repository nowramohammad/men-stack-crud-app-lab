require("dotenv").config();


const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
//const router = express.Router();
mongoose.connect(process.env.MONGODB_URI)
app.get("/", (req,res) => {
    res.send("Cars app Home Page");
})
app.post("/cars", async (req,res) => {
    const newCar = new Car (req.body);
    await newCar.save();
    res.redirect('/cars');
});
const car = await Car.creat(req.body)
res.json(Car);
// server.js the connection
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
mongoose.connection.on("error",(err) => {
    console.log(`failed to connect${err}.`);

});
app.get('/cars', async (req, res) => {
    const cars = await Car.find();
    res.render('index', { cars });
});
//const Car = require("./models/car.js");
const carRoutes = require("./routes/cars");
app.use("/cars", carRoutes);

app.get('/cars/new', (req, res) => {
    res.render('new');
});
app.post('/cars', async (req, res) => {
    const newCar = new Car(req.body);
    await newCar.save();
    res.redirect('/cars')
});

//GET and route
const Car = require("./models/car.js");
app.get("/", (req, res) => {
    res.send("Cars app Home page")
});
app.get('/cars/edit/:id', async (req, res) => {
    const car = await Car.findById(req.params.id);
    res.render('edit', { car });
});

app.post('/cars/delete/:id', async (req, res) => {
    await Car.findByIdAndDelete(req.params.id);
    res.redirect('/cars');
});

app.listen(3000, () => {
    console.log("building a CRUD cars app using port 3000");
});