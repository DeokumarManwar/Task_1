const mongoose = require('mongoose')
const Schema = mongoose.Schema

// incomer,star delta

const componentSchema = new Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },

    sub_components :[{
        type:Schema.Types.ObjectId,
        ref:'subcomponent',
        required:true
    }]
    
})

module.exports = mongoose.model('component',componentSchema)
