const { Router }                = require('express')
const TaskController            = require('../controllers/taskController')

const router = Router()

router  
    .get('/task', TaskController.getDataAll)
    .get('/task/:id', TaskController.getDataById)
    .post('/task', TaskController.insertData)
    .delete('/task/:id', TaskController.deleteData)
    .put('task/:id', TaskController.updateData)

module.exports = router