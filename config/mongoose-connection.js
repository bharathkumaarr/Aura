// const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB_URI)
// .then(()=>{
//     console.log('connected')
// })
// .catch((error)=>{
//     console.log(error)
// })

// module.exports = mongoose.connection;

const mongoose = require('mongoose')
const dbgr = require('debug')("development:mongoose-connection")


mongoose.connect(process.env.MONGODB_URI)



.then(()=>{
    dbgr('db connected');
    
})
.catch((error)=>{
    dbgr(error);

})

module.exports= mongoose.connection;

