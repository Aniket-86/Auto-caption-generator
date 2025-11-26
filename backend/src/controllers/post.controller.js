const postModel = require('../models/post.model')
const userModel = require('../models/user.model')
const generateCaption = require('../service/ai.service')
const uploadFile = require('../service/storage.service')

async function postHandler(req,res){
    const file = req.file


   const base64ImageFile = new Buffer.from(file.buffer).toString('base64')
    const caption = await generateCaption(base64ImageFile)

    const result  = await uploadFile(file.buffer,file.originalname)

    const post = await postModel.create({
        image:result.url,
        caption:caption,
        user:req.user._id
    })

   const user = await userModel.findById(req.user._id)
   user.posts.push(post._id);
   await user.save()

   

    console.log(user)

    res.status(201).json({
        message:'post created successfully',
        post
    })
   
}


module.exports = {
    postHandler
}