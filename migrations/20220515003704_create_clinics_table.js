/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('clinic', function (table) {
        table.increments();
        table.string('clinic_name').nullable;
        table.integer('phone_number').nullable;
        table.string('address').nullable;
        table.integer('zipcode').nullable;
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('clinic');
};
