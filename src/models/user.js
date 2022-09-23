const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    proffession:{
        type: String,
        require: true
    },
    address_work:{
        type: Object,
        require: true,
        code_zip:{        
            type:Number,
            required: true
                },
        city_name:{
            type:Number,
            required: true
        },
        coordinates:{
            type:Number,
            required: true
        }
    }
})

module.exports = mongoose.model('user',userSchema)