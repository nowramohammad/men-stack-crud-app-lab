const express = require("express");
const Car = require("../models/car");
const router = express.Router();

router.get("/", async (req,res) => {
    const cars = await Car.find();
    res.render("cars/index", { cars });
});
router.get("/new", (req, res) => {
    res.render("cars/new");
});
router.post("/", async (req, res) => {
    const { make, model, year } = req.body;
    const car = new Car({ make, model, year });
    await car.save();
    res.redirect("/cars");
});
module.exports = router;