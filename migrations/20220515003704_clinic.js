/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('clinic', function (table) {
        table.increments();
        table.integer('user_id').references('id').inTable('users');
        table.string('clinic_name').nullable;
        table.float('latitude').notNullable;
        table.float('longitude').notNullable
        table.string('phone_number').nullable;
        table.string('address').nullable;
        table.integer('zipcode').nullable;
        table.string('service_areas').nullable
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('clinic');
};
