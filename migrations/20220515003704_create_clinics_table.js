/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('clinic', function (table) {
        table.increments('id').primary();
        table.string('clinic_name').nullable;
        table.integer('phone_number').nullable;
        table.string('address').nullable;
        table.integer('clinic_zipcode_foreign').references('zipcode').inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('clinic');
};
