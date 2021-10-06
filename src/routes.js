const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Success 😀'
  })
})

router.post('/', (req, res) => {
  const { nome } = req.body

  res.json({
    user: nome
  })
})

module.exports = router
