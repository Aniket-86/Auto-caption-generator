const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function registerHandler(req,res){
    const{username,email,password} = req.body

    const userExists = await userModel.findOne({
        username
    })
    if(userExists){
        return res.status(400).json({message:'username already exists'})
    }

    const user = await userModel.create({
        
        username,
        email,
        password: await bcrypt.hash(password,10)
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie('token',token)

    res.status(201).json({ message:'user registerd successfully'})
   
}

async function loginHandler(req,res){
  const {username,password} = req.body
  
  const user = await userModel.findOne({
    username
  })

  if(!user){
    res.status(404).json({
        message:'Invalid username or password'
    })
  }

  const isPasswordValid = await bcrypt.compare(password,user.password)

  if(!isPasswordValid){
    return res.status(404).json({
        message:'Invalid username or password'
    })
  }

  const token = jwt.sign({
    id:user._id
  },process.env.JWT_SECRET)

  res.cookie('token',token)

  res.status(200).json({
    message:'user logged in successfully',
    user
  })

}

async function getUser(req,res){

  const token = req.cookies.token

  if(!token){
    return res.status(401).json({
      message:'user not authenticated'
    })
  }
    
    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
   
    const user = await userModel.findById(decoded.id).populate("posts");  

    res.json({ user });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}

async function logoutUser(req,res){
   res.cookie('token','')
   res.status(200).json({
    message:'user logged out successfully'
   })
}





module.exports ={
    registerHandler,
    loginHandler,
    getUser,
    logoutUser
}