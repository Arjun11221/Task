const express = require('express');
const { productController, allProductController } = require('../controller/productController');
const router = express.Router();

router.post("/data/product", productController);
router.get("/data/allProductDetails", allProductController);


module.exports = router;