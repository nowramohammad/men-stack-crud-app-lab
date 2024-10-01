const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    make: {type: String, required: true },
    model: { type: String, required: true},
    year: { type:Number, required: true },
  /*name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,*/
});

const car = mongoose.model('Car', carSchema)
module.exports = car