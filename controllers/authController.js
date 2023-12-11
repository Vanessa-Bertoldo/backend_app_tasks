const AuthService = require('../services/authService')

const authService = new AuthService()

class AuthController{
    static async searchDataLogin(req, res){
        const { email, password } = req.body
        try{
            const user = await authService.getLoginUser({ email, password })
            res.status(200).json(user)
        } catch(error) {
            res.status(400).json({message: error.message})
        }
    }
}
module.exports = AuthController