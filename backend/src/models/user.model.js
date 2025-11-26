const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
   
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    posts:[

        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'post'
        }
    ]

})

const userModel = mongoose.model('user',UserSchema);
module.exports = userModel