const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  supplierType: {
    type: String,
    required: true,
  },  
  observation: {
    type: String,
  },  
},
)

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier; 
