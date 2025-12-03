// const express= require('express')
// const app = express();

// const cookieParser = require('cookie-parser')
// const path = require('path')


// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'ejs');

// app.get('/', (req,res)=>{
//     res.send('ehl')
// })

// app.listen(3000, ()=>{
//     console.log('running at 3000');
    
// })



const express = require('express')
const app = express()

const cookieParser = require('cookie-parser');
const path = require('path')
const dotenv = require('dotenv')

const db = require('./config/mongoose-connection')

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')


app.get('/', (Req,res)=>{
    res.send('bcakend activated')
})

app.listen(process.env.PORT, ()=>{
    console.log('server running')
})