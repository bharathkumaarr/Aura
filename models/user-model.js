const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart:{
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
    },
    orders:{
        type: Array,
        default: []
    },
    contact: {
        type: Number,
    },
    picture: String
})


module.exports = mongoose.model('user', userSchema)



