/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('comments', function (table) {
        table.increments('id').primary();
        table.integer('posts_id').notNullable().references('id').inTable('posts').onDelete('CASCADE').index();
        table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index();
        table.text('content');
        table.timestamp(true,true).defaultTo(knex.fn.now())
        
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
