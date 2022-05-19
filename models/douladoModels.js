const db = require("../db/db");
const pool = require("../db/db_pool");

class doulaModels {

  static async loginUser (){
    const sql = "SELECT * FROM users WHERE email = $1 AND password = $2"
    const dbResults = await pool.query(sql, [email, password])
    return dbResults.rows
  }

  static async registerUser (){
    const {first_name,
      last_name,
      password,
      email,
      gender,
      medicaid,
     } =data
    const sql = "INSERT INTO user WHERE first_name,last_name, password, email, gender, medicaid VALUES ($1,$2,$3,$4,$5,$6)RETURNING *"

    const dbResults = await pool.query(sql, [first_name,
      last_name,
      password,
      email,
      gender,
      medicaid,
      ]);
      return dbResults.rows;
    
  }

  static async getAllUsers() {
    const sql = "SELECT * from users";
    const dbResults = await pool.query(sql);
    return dbResults.rows;
  }

  static async getAllPost() {
    const sql = "SELECT posts.*, users.first_name, users.last_name FROM posts JOIN users ON posts.user_id = users.id ORDER BY created_at DESC";
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
}

module.exports = doulaModels;