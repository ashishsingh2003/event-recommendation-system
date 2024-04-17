const mongoose =require('mongoose');

const eventschema=new mongoose.Schema({
    img:{
        type:String,
        required:true,
    },
    event:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    seatleft:{
        type:Number,
        required:true,
        min:1
    }
    
})

const Event=mongoose.model('Event',eventschema);
module.exports=Event;