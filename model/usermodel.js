const mongoose=require("mongoose");


const schema=new mongoose.Schema({
     topic:{
        type:String ,
        required:true,
        unique:true,
    },
    data:{
        type :String,
        required:true,
    }

},{timestamps:true});

const user=mongoose.model('user',schema);

module.exports=user;