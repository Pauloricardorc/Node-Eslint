// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      // eslint-disable-next-line node/no-path-concat
      filename: `${__dirname}/src/database/projectSQL.sqlite`
    },
    useNullAsDefault: true,
    migrations: {
      // eslint-disable-next-line node/no-path-concat
      directory: `${__dirname}/src/database/migrations`
    }
  }
}
