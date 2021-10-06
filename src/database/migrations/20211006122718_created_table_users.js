
exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id')
    table.text('username').unique().notNullable()
    table.text('email').notNullable()
    table.text('password').notNullable()
    table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now())
    table.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
