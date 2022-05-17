/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("posts").del()
  await knex('posts').insert([
    {user_id: 1, content: 'My baby was handled with care'},
    {user_id: 1, content: 'The doula was super supportive'},
  ]);
};
