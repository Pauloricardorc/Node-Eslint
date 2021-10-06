const connection = require('../../database/connection.js')

module.exports = {
  async index (req, res) {
    const result = await connection('users')

    return res.json(result)
  },

  async create (req, res) {
    const { username, email, password } = req.body

    try {
      await connection('users').insert({
        username,
        email,
        password
      })

      return res.json({
        message: 'Cadastrado com sucesso',
        usuario: username
      })
    } catch (error) {
      res.json({
        message: error.message,
        status: '5xx'
      })
    }
  }
}
