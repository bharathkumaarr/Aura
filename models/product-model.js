const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI);

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        deefault:0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String
})


module.exports = mongoose.model('product', productSchema)