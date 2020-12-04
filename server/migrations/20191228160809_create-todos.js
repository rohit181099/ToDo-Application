
exports.up = function(knex) {
    return knex.schema.createTable('todos', function(table) {
        table.increments('id');
        table.string('title');
        table.string('priority').defaultTo('Important');
        table.boolean('completed').defaultTo(false);
        table.timestamp('date', { precision: 6 }).defaultTo(knex.fn.now(6));;
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('todos');
};