const mongoose = require('mongoose')

const postschema = mongoose.Schema({
    message:{
        type: String,
        require: true
    },
    sender:{
        type: String,
        require: true
    }
});
module.exports=mongoose.model('post',postschema)