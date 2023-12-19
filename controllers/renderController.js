

const renderRegister = (req,res) =>{
    res.render('register')
}

const renderLogin = (req,res) =>{
    res.render('login')
}

const renderAbout = (req,res) =>{
    res.render('about')
}
module.exports = {renderRegister,renderLogin,renderAbout}