const userModel = require('../model/userModel')

const authController = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId })
        user.password = undefined
        if (!user) {
            return res.status(200).json({
                success: false,
                message: 'user is not found'
            })
        }
        else {
            return res.status(200).json({
                success: true,
                message: 'auth controller is successfully',
                data: user
            })
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: 'auth is fail'
        })
    }
}

module.exports = {authController}