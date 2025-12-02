const express = require('express')
const {registerHandler,loginHandler,getUser,logoutUser} = require('../controllers/auth.controller')

const router = express.Router()

router.post('/register',registerHandler)
router.post('/login',loginHandler)
router.get('/me',getUser)
router.post('/logout',logoutUser)



module.exports = router