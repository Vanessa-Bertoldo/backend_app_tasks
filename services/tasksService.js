const database = require('../models')

class TaskService{
    async getDataTasks(){
        const tasks = await database.TASKS.findAll()
        return tasks
    }

    async insertTask(dto){
        try{
            const newTask = await database.TASKS.create({
                title:              dto.title,
                description:        dto.description,
                status:             dto.status,
                date_initial:       dto.date_initial,
                date_final:         dto.date_final,
                user_id:            dto.user_id
            })
            const tasks = await database.TASKS.findAll({
                where: {
                    user_id: dto.user_id
                }
            })
            return tasks
        } catch(error) {
            throw new Error("Erro ao cadastrar dados de tarefa")
        }
    }

    async getDataByIdUser(id){
        try{
            const tasks = await database.TASKS.findAll({
                where: {
                    user_id: id
                }
            })
            return tasks
        } catch(error){
            throw new Error("Erro ao buscar dados")
        }
    }

    async deleteTask(id){
        try{
            const task = await database.TASKS.findOne({
                where: {
                    id: id
                }
            })

            if(!task){
                throw new Error("Tarefa não encontrada no banco")
            }

            await database.TASKS.destroy({
                where: {
                    id: id
                }
            })

            const tasks = await this.getDataByIdUser(task.user_id)
            return tasks
        } catch(error) {
            throw new Error(error)
        }
    }

    async getDataById(id){
        try{
            const task = database.TASKS.findOne({
                where: {
                    id: id
                }
            })
            return task
        } catch( error) {
            throw new Error("Erro ao buscar dados")
        }
    }

    async getDataTask(id){
        try{
            const tasks = database.TASKS.findAll({
                where: {
                    user_id: id
                }
            })
            return tasks
        } catch(error) {
            throw new Error("Erro ao buscar dados")
        }
    }

    async updateStatus(dto){
        const task =  await this.getDataById(dto.id)
           
        if(!task){
            throw new Error("Tarefa informada não cadastrada")
        }
        try{
            task.status = dto.status

            await task.save()

            const tasks = await this.getDataTasks()
            return tasks
        } catch(error) {
            throw new Error("Erro ao atualizar status de tarefa")
        }
    }

    async updateData(dto){
        const tasks = await this.getDataById(dto.id)

        if(!tasks){
            throw new Error("Tarefa informada não encontrada")
        }
        try{
            tasks.title                 = dto.title
            tasks.description           = dto.description
            tasks.status                = dto.status
            
            await tasks.save()
             
            const getDataTask = await this.getDataTasks()
            return getDataTask
        } catch(error) {
            throw new Error(error)
        }
    }
}
module.exports = TaskService
