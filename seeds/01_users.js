const nodemon = require("nodemon");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function(){
  return knex('users').insert([
    {first_name:"Kayla" , last_name:"Edwards", birthday:"3/31/1997", password: "Valerie", email:"kaylaedwards575@gmail.com", medicaid:"Yes", is_doula:"No", gender:"women", doula_skillset:"None"},
    {first_name:"Yasirah" , last_name:"Boyce", birthday:"3/17/1998", password: "Yaya", email:"yasirahboyce1@gmail.com", medicaid:"Yes", is_doula:"No", gender: "women", doula_skillset:"None"},
    {first_name:"Andrew" , last_name:"Enoe", birthday:"8/10/1997", password: "Andrew", email:"andrewm.enoe@gmail.com", medicaid:"No", is_doula:"Yes", gender: "women", doula_skillset:"Lotus flower birth"}
  ]);
})
};
