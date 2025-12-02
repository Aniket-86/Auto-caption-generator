const express = require('express');
const {postHandler} = require('../controllers/post.controller')
const authMiddleware = require('../middleware/auth.middleware');
const multer = require('multer');

const upload = multer({storage:multer.memoryStorage()})



const router = express.Router()


router.post('/post',authMiddleware,upload.single('image'),postHandler)


module.exports = router