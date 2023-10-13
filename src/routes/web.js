const express = require('express')
const router = express.Router()
const {handleGetHomePage,getKwd} = require('../controllers/homeController')

//router.METHOD('/route',handler)
router.get('/',handleGetHomePage)
router.get('/kwd',getKwd)

module.exports = router