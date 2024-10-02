const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    make: {type: String, required: true },
    model: { type: String, required: true},
    year: { type:Number, required: true, min: [1886, 'Year must be greater than or equal to 1886'], 
      max: [new Date().getFullYear(), 'Year cannot be in the future']}, description: String, });
  /*name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,*/

const car = mongoose.model('Car', carSchema)
module.exports = car