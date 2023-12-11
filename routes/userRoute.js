const { Router }                = require('express')
const UserController            = require('../controllers/userController')

const router = Router()

router  
    .post('/user', UserController.register)
    .get('/user', UserController.searchData)
    //.post('/auth', UserController.searchDataLogin)
    .delete('/user/:id', UserController.deleteUser)

module.exports = router