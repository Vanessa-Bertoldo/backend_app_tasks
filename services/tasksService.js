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
            const tasks = await this.getDataTasks()
            return tasks
        } catch(error) {
            throw new Error("Erro ao cadastrar dados de tarefa")
        }
    }

    async deleteTask(id){
        try{
            await database.TASKS.destroy({
                where: {
                    id: id
                }
            })

            const tasks = await this.getDataTasks()
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

            return await task.reload()
        } catch(error) {
            throw new Error("Erro ao atualizar status de tarefa")
        }
    }
}
module.exports = TaskService