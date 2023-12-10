const UserService = require('../services/userService')

const userService = new UserService()

class UserController{
    static async register(req, res){
        const { name, email, password } = req.body

        try{
            const newUser = await userService.insertData({ name, email, password })
            return res.status(200).send(newUser)
        } catch (erro) {
            return res.status(400).send({ message: erro.message })
        }
    }

    static async searchData(req, res){
        try{
            const users = await userService.getData()
            res.status(200).json(users)
        } catch(error) {
            res.status(400).json({message: error.message})
        }
    }

    static async searchDataById(req, res){
        const { id } = req.params
        console.log("id invocado ", id)
        try{
            const user = await userService.getDataById(id)
            res.status(200).json(user)
        } catch(error) {
            res.status(400).json({message: error.message})
        }
    }

    static async deleteUser(req, res){
        const { id } = req.params
        try{
            await userService.deleteUserById(id)
            res.status(200).json({ message: "Dados excluidos com sucesso" })
        } catch(error) {
            res.status(400).json({ message: error.message })
        }
    }
}
module.exports = UserController