const userModel = require("../model/userModel");
const {comparePassword} = require('../helper/userBcrypt')
const jwt = require("jsonwebtoken");

const controllerLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.json({
                success: false,
                message: 'All fiels is Required'
            })
        }

        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({
                success: false,
                message: 'user is not found'
            })
        }

        // check password matched
        const matchPassword = await comparePassword(password, user.password)
        if (!matchPassword) {
            return res.json({
                success: false,
                message: 'Password is not matched'
            })
        }

        // token JWT
        const token = jwt.sign({ id: user._id }, process.env.jwttokensecret, {})
        return res.status(200).json({
            success: true,
            message: 'Login successfully',
            token
        })
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {controllerLogin};