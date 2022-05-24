const Pool = require("pg").Pool; 

const connectionDevelopment = {
  user: "doulado",
  password: "password",
  host: "localhost",
  port: 5432, 
  database: "doulasocial"
}


const connectionProduction = {
  connectionString: process.env.DATABASE_URL, 
  ssl: {rejectUnauthorized: false}
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionDevelopment)
module.exports = pool;