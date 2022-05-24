/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments();
        table.string('first_name').nullable();
        table.string('last_name').nullable();
        table.string('phone_number');
        table.string('birthday');
        table.string('email')
        table.string('password')
        table.string('gender')
        table.boolean('medicaid').notNullable();
        table.boolean('is_doula').notNullable();
        table.string('doula_skillset')

       
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
