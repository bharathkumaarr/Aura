const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true
    },
    email: String,
    password: String, 
    products: {
        type: Array,
        default: [],
    },
    picture: String,
    gstin: String,


    
})


module.exports = mongoose.model("owner", ownerSchema);
