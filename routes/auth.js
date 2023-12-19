const express = require('express')
const {registerController,loginController,aboutController} = require('../controllers/authController')
const {renderRegister,renderLogin,renderAbout} = require('../controllers/renderController')
const router = express.Router()
const {validate} = require('../middleware/validate')

router.get('/',renderLogin)
router.get('/register',renderRegister)
router.post('/user/register',registerController)


router.post('/login',loginController)
// middleware
router.get('/user/about',validate,aboutController)

module.exports = router
