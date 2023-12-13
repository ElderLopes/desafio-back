const moongose = require("mongoose");

const supplierSchema = new moongose.Schema({
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
  isFavorite: {
    type: Boolean,
    default: false,
  },
},
)

const Supplier = moongose.model('Supplier', supplierSchema);

module.exports = Supplier; 