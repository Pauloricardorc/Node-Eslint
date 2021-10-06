const express = require('express')
const router = express.Router()

const ControllerUser = require('./controllers/UserController/usercontroller')

router.get('/', ControllerUser.index)

router.post('/', ControllerUser.create)

module.exports = router
