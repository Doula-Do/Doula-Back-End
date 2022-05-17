const db = require("../db/db");
const pool = require("../db/db_pool");

class doulaModels {

  static async loginUser (){
    const sql = "SELECT * FROM users WHERE email = $1 AND password = $2"
    const dbResults = await pool.query(sql, [email, password])
    return dbResults.rows
  }


  static async getAllUsers() {
    const sql = "SELECT * from users";
    const dbResults = await pool.query(sql);
    return dbResults.rows;
  }

  static async getAllPost() {
    const sql = "SELECT posts.*, users.first_name, users.last_name FROM posts JOIN users ON posts.user_id = users.id ORDER BY true DESC";
    const dbResults = await pool.query(sql);
    return dbResults.rows;
  }

  static async createAPost(data) {
    const { user_id, content } = data;
    const sql =
      "INSERT INTO posts (user_id, content ) VALUES ($1, $2) RETURNING user_id, content";
    const dbResults = await pool.query(sql, [user_id,content]);
    return dbResults.rows;
  }


}

module.exports = doulaModels;