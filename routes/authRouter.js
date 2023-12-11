const { Router }                = require('express')
const AuthController            = require('../controllers/authController')

const router = Router()

router 
    .post('/auth', AuthController.searchDataLogin)

module.exports = router