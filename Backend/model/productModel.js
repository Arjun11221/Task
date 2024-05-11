const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  productSize: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required:true
  }
  
});


const productModel = new mongoose.model("productDetails", productSchema);

module.exports = productModel;
