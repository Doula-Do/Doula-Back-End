const db = require("../db/db");
const pool = require("../db/db_pool");

class doulaModels {
  static async registerUser (data){
    const {
      first_name,
      last_name,
      password,
      email,
      gender,
      medicaid,
      is_doula,
     } = data
    const sql = "INSERT INTO users (first_name, last_name, password, email, gender, medicaid, is_doula) VALUES ( $1, $2, $3, $4, $5, $6, $7) RETURNING *"

    const dbResults = await pool.query(sql, [
      first_name,
      last_name,
      password,
      email,
      gender,
      medicaid,
      is_doula
      ]);
      return dbResults.rows;
  }

  static async getAllUsers() {
    const sql = "SELECT * from users";
    const dbResults = await pool.query(sql);
    return dbResults.rows;
  }

  static async getAllPost() {
    const sql = "SELECT posts.*, users.first_name, users.last_name, users.is_doula FROM posts JOIN users ON posts.user_id = users.id ORDER BY created_at DESC";
    const dbResults = await pool.query(sql);
    return dbResults.rows;
  }

  static async createAPost(data) {
    const { user_id, content } = data;
    const sql =
      "INSERT INTO posts (user_id, content ) VALUES ($1, $2) RETURNING *";
    const dbResults = await pool.query(sql, [user_id,content]);
    return dbResults.rows;
  }

  static getPost = (id) => db.select().from('posts').where({id});

  static updatePost = (id, content) => db('posts').update({content}).where({id}).returning("*");

  static deletePost = (id) => db.select().from('posts').where({id}).del();

  static postComment = (post_id, user_id, content) => db('comments').insert({post_id, user_id, content}).returning("*");

  static getComments = () => db.select("comments.*","users.first_name", "users.last_name","users.is_doula").from("comments").join("users", { "users.id": "comments.user_id" }).orderBy('created_at');

  static deleteComment = (id) => db.select().from('comments').where({id}).del();

  static getUser = (id) => db.select().from('users').where({id});

  static updateUser = (id, first_name, last_name, birthday, phone_number, medicaid, email, doula_skillset) => db('users').update({first_name, last_name, birthday, phone_number, medicaid, email, doula_skillset}).where({id}).returning('*');

  //Clinics

  static findClinics = () => db.select().from('clinic')
}

module.exports = doulaModels;