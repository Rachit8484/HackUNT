const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    PNR:{
        type:String,
        required: true
    }
});

const Contact = module.exports = mongoose.model('User', UserSchema);