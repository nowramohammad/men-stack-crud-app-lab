const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
const Car = require('./models/car.js');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URI, )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));


app.get('/test', (req, res) => {
    res.send("Server is running!");
});


app.get('/cars', async (req, res) => {
    const cars = await Car.find({});
    res.render('index', { cars });
});


app.get('/cars/new', (req, res) => {
    res.render('new');
});


app.post('/cars', async (req, res) => {
    try {
        const newCar = await Car.create(req.body);
        
        res.redirect('/cars');
    } catch (err) {
        res.render('new', { error: err.message }); // Pass error to the new.ejs view
    }
});
// edit 
app.get('/cars/edit/:id', async (req, res) => {
    const car = await Car.findById(req.params.id);
    res.render('edit', { car });
});

app.post('/cars/edit/:id', async (req, res) => {
    try {
        await Car.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/cars');
    } catch (err) {
        const car = await Car.findById(req.params.id);
        res.render('edit', { car, error: err.message }); // Pass error to the edit.ejs view
    }
});


app.post('/cars/delete/:id', async (req, res) => {
    await Car.findByIdAndDelete(req.params.id);
    res.redirect('/cars');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});