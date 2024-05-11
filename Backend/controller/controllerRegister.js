const userModel = require('../model/userModel')
const bcrypt = require("bcrypt");

const controllerRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(200).json({
        success: false,
        message: "All fields is required",
      });
    }

    const existUser = await userModel.findOne({email});
    if(existUser){
      return res.status(200).json({
        success:false,
        message:"User is Already Exist"
      })
    }

    const bcryptPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({ name, email, password : bcryptPassword });
    return res.status(201).json({
      success: true,
      message: "New User Register successfully",
    });

  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {controllerRegister};
