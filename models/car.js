const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { 
      type: Number, 
      required: true, 
      /*min: [1886, 'Year must be greater than or equal to 1886'], // First car invented
      max: [new Date().getFullYear(), '*/
    }
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;