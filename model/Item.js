const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const item = itemSchema;


module.exports = mongoose.model('item2', item)