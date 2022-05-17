/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.date('birthday').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.string('Partner_first_name').nullable();
        table.string('Partner_last_name').nullable();
        table.string('gender').notNullable();
        table.boolean('medicaid').notNullable();
        table.integer('zipcode')
        table.boolean('is_doula').notNullable();
        table.string('phone_number');
        table.boolean('need_Doula').nullable();
        table.string('birth_preference').nullable();
        table.date('due_date').nullable();
        table.string('baby_gender').nullable();
        table.boolean('first_time_baby').nullable();
        table.string('doula_experience');
        table.string('doula_type').nullable();
        table.boolean('doula_self_employed').nullable();
        table.string('doula_skillset').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
