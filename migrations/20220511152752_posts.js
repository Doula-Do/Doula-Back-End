/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('posts', function (table) {

        table.increments();
        table.integer('user_id').notNullable().references('id').inTable('users').index();
        table.text('content').nullable;
        table.timestamp(true,true).defaultTo(knex.fn.now())

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
