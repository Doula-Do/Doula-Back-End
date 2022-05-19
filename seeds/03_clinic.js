/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('clinic').del()
  await knex('clinic').insert([
    {clinic_name: "Ancient Song Doula Services", latitude:"40.683987", longitude:"-73.931860", phone_number:"347-778-3490", address: "521 Halsey Street, Brooklyn, New York", zipcode:"11233"},
    {clinic_name: "Caribbean Womens Health Association", latitude:"40.652439", longitude:"-73.944310", phone_number:"718-826-2942", address: "3512 Church Ave Brooklyn, NY", zipcode:"11203"},
    {clinic_name: "Mama Glow Foundation", latitude:"40.715251", longitude:"-73.962623", phone_number:"718-510-4015", address: "267 Berry Street, Brooklyn, NY", zipcode:"11249"},
    {clinic_name: "Northern Manhattan Perinatal Partnership", latitude:"40.809554", longitude:"-73.945375", phone_number:"212-665-2600", address: "127 West 127th, Third Floor New York, New York", zipcode:"10027"},
    {clinic_name: "By My Side Birth Support Program", latitude:"40.685764", longitude:"-73.941493", phone_number:"718-637-5231", address: "485 Throop Avenue, 2nd ﬂoor Brooklyn, New York", zipcode:"11221"},
    {clinic_name: "Hope and Healing Family Center", latitude:"40.670093", longitude:"-73.913772", phone_number:"347-384-1494", address: "444 Thomas S. Boyland Street, Brooklyn NY, Suite 20", zipcode:"11212"},
    {clinic_name: "Community Health Center of Richmond", latitude:"40.626394", longitude:"-74.077958", phone_number:"917-830-1200", address: "135 Canal St Suite #300, Staten Island, NY", zipcode:"10304"}
  ]);
};