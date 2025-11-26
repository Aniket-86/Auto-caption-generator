const express = require('express');
const cookieParser = require('cookie-parser')
const authRoutes = require('../src/routes/auth.routes')
const postRoutes = require('../src/routes/post.routes')
const cors = require('cors')


const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true}))
app.use('/auth',authRoutes)
app.use('/posts',postRoutes)

module.exports = app