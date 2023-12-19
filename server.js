require("dotenv").config
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const connectDb = require('./config/dbcon')
const {registerController,loginController} = require('./controllers/authController')

connectDb()
// set view engine ejs 
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
// controller
app.get(loginController)
app.get(registerController)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({ extended: true}))
// route
app.use('/',require('./routes/auth'))


app.listen(PORT,()=> console.log(`Server Running port ${PORT}`))
