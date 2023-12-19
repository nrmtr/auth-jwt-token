const jwt = require('jsonwebtoken')

const validate = async (req, res, next) =>{
    try{
        const token = req.headers["authtoken"]
        if(!token){
            return res.status(401).send('No Token')
        }
        //vierify token
        const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`)
        console.log(decoded)
        req.user = decoded.user
        next();
    } catch (err) {
        console.log(err);
        res.send('Token Invalid').status(500)
    }
}

module.exports = {validate}