const productModel = require("../model/productModel");

const productController = async (req, res) => {
  const { productName, description, price, category, productSize, date } =
    req.body;
  try {
    if (
      !productName ||
      !description ||
      !price ||
      !category ||
      !productSize ||
      !date
    ) {
      return res.status(200).json({
        success: false,
        message: "All fields is required",
      });
    }

    const products = await productModel.create({
      productName,
      description,
      productSize,
      category,
      price,
      date,
    });
    return res.status(201).json({
      success: true,
      message: "New Product is Created",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const allProductController = async(req,res)=>{
    try {
      const allProduct = await productModel.find();
      return res.status(201).json({
        success : true,
        message : "Get All Products",
        data:allProduct
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        message : error.message
      })
    }
}

module.exports = { productController, allProductController };
