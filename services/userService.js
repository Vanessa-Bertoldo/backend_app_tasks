const database = require('../models')

class UserService{
    async getData(){
        const users = await database.USER.findAll()
        return users
    }

    async getDataById(id){
        try{
            const user = await database.USER.findOne({
                where: {
                    id: id
                }
            })
            return user
        } catch(error) {
            throw new Error("Erro ao buscar usuario")
        }
        
    }

    async insertData(dto){
        const user = await database.USER.findOne({
            where: {
                email: dto.email
            }
        })

        if(user){
            throw new Error('Email já cadastrado')
        }

        try{
            const newUser = await database.USER.create({
                name:       dto.name,
                email:      dto.email,
                user:       dto.user,
                password:   dto.password
            })
            return newUser
        } catch(error){
            throw new Error("Erro ao registrar novo usuario")
        }
    }

    async deleteUserById(id){
        try{
            await database.USER.destroy({
                where: {
                    id: id
                }
            })
        } catch(error) {
            throw new Error("Erro ao excluir dados")
        }
    }
}
module.exports = UserService