const db = require("../db/db");
const pool = require("../db/db_pool");

class doulaModels {

<<<<<<< Updated upstream
=======
  // static async loginUser (){
  //   const sql = "SELECT * FROM users WHERE email = $1 AND password = $2"
  //   const dbResults = await pool.query(sql, [email, password])
  //   return dbResults.rows
  // }


>>>>>>> Stashed changes
  static async getAllUsers() {
    const sql = "SELECT * from users";
    const dbResults = await pool.query(sql);
    return dbResults.rows;
  }

  static async getAllPost() {
    const sql = "SELECT * from posts ORDER BY id";
    const dbResults = await pool.query(sql);
    return dbResults.rows;
  }

  static async createAPost(data) {
    const { user_id, content } = data;
    const sql =
      "INSERT INTO posts (user_id, content ) VALUES ($1, $2) RETURNING user_id, content ";
    const dbResults = await pool.query(sql, [user_id,content]);
    return dbResults.rows;
  }


}

module.exports = doulaModels;
