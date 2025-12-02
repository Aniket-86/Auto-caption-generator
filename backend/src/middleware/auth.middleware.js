const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model')


async function authMiddleware (req,res,next){
 const token = req.cookies.token

 if(!token){
    return res.status(401).json({
        message:'user unauthorized, please login first'
    })
 }

  try{
    let decoded = jwt.verify(token,process.env.JWT_SECRET)
    const user = await userModel.findById({
        _id : decoded.id
    })
    req.user = user
    next()
    
  } catch(err){
    return res.status(401).json({
        message:'invalid token, login again'
    })
  }


}


module.exports = authMiddleware