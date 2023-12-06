const { Router }                = require('express')
const UserController            = require('../controllers/userController')

const router = Router()

router  
    .post('/user', UserController.register)
    .get('/user', UserController.searchData)
    .get('/user/:id', UserController.searchDataById)
    .delete('/user/:id', UserController.deleteUser)

module.exports = router