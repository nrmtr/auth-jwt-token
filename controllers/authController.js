const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { token } = require('morgan')

const registerController = async (req,res) =>{
   
    try{
        //check user

        const {username, password} = req.body
        let user = await User.findOne({ username })
        if(user) {
            return res.send('User already exists!!').status(400)
        }
        //encrypt
        const salt = await bcrypt.genSalt(10)
        
        user = new User({
            username,
            password
        })
        user.password = await bcrypt.hash(password, salt)

        await user.save()
        res.send('Register Successfully!!')
        console.log(`Register username is ${username}`)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }

}

const loginController = async (req,res) =>{
    try{
        const {username, password} = req.body
        let user = await User.findOneAndUpdate({username}, {new: true})
        console.log(user)
        if(user){
            const Match = await bcrypt.compare(password, user.password)
            if (!Match) {
                return res.status(400).send('Password Invalid!!!')
                res.redirect('login')
            } 

            let payload = {
                user: {
                    username: user.username
                }
            }
            jwt.sign({payload}, `${process.env.JWT_SECRET}`,{expiresIn: '1h'}, (err,token) => {
                if(err) throw err;
                res.json({token,payload})
                
            })
            res.status(200)
            
        } else {
            return res.status(400).send('User not found !!').json(user)
        }
    } catch(err) {
        console.log(err)
        res.status(500).send('Server err')
    }
}

const aboutController = async (req,res) =>{

    res.render('about',{
        
    })
    res.json(req.user)
}

module.exports = {registerController,loginController,aboutController}
