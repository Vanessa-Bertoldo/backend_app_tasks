const TaskService = require("../services/tasksService")

const tasksService = new TaskService()

class TaskController{
    static async getDataAll(req, res){
        try{
            const tasks = await tasksService.getDataTasks()
            res.status(200).json(tasks)
        } catch(error) {
            res.status(400).send({message: error.message})
        }
    }

    static async insertData(req, res){
        const { title, description, status, date_initial, date_final, user_id } = req.body
        try{
            const task = await tasksService.insertTask({ title, description, status, date_initial, date_final, user_id })
            res.status(200).json(task)
        } catch(error) {
            res.status(400).send({message: error.message})
        }
    }

    static async deleteData(req, res){
        const { id } = req.params
        try{
            const tasks = await tasksService.deleteTask(id)
            res.status(200).json({status: 200, data:tasks})
        } catch(error) {
            res.status(400).send({message: error.message})
        }
    }

    static async getDataById(req, res){
        const { id } = req.params
        try{
            const task = await tasksService.getDataById(id)
            res.status(200).json(task)
        } catch(error) {
            res.status(400).send({message: error.message})
        }
    }

    static async getTasksByUserd(req, res){
        const { id } = req.params
        try{
            const tasks = await tasksService.getDataTask(id)
            res.status(200).json(tasks)
        } catch(error) {
            res.status(400).send({message: error.message})
        }
    }

    static async updateStatus(req, res){
        const { status, id } = req.body

        try{
            const task = await tasksService.updateStatus({ status, id })
            res.status(200).json({status: 200,data:task})
        } catch(error) {
            res.status(400).send({message: error.message})
        }
    }

    static async updateDataTasks(req, res){
        const { id, title, description, status } = req.body
        try{
            const tasks = await tasksService.updateData({ id, title, description, status })
            res.status(200).json({status: 200, data: tasks})
        } catch(error){
            res.status(400).send({message: error.message})
        }
    }
}
module.exports = TaskController