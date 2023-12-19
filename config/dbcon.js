const mongoose = require('mongoose')
const connectDb = async()=>{
    try{
        await mongoose.connect('mongodb://root:1234@127.0.0.1:27017/authdb?authSource=admin')
        console.log('Connect database successfully!!');
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDb