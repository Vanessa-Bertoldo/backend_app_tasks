const database = require('../models')

class AuthService{
    async getLoginUser(dto) {
        try{
            const data = await database.USER.findOne({
                where: {
                    email:      dto.email,
                    password:   dto.password
                },
                include: [
                    { 
                        model: database.TASKS, 
                        as: 'tasks',
                        attributes: ['id', 'title', 'description', 'status', 'date_initial', 'date_final'], 
                    }
                ]
            })
            return data
        } catch {
            throw new Error("Usuário ou senha inválidos")
        }
    }
}
module.exports = AuthService