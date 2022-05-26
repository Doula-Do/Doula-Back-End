/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('chat', function (table) {
        table.increments();
        table.integer('sender_id').notNullable().references('id').inTable('users');
        table.integer('receiver_id').notNullable().references('id').inTable('users');
        table.string('message');
        table.timestamps(true,true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('chat');
};
