const router = require('express').Router(); 
const pool = require('../db/db')
const {fetchUsers, userLogin, fetchPost, makeAPost }  = require('../controller/douladoController');

var Pool = require('pg').Pool;

var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'doulasocial',
    password: '',
    port: 5432,
});

  router.get('/users', fetchUsers)
  
<<<<<<< Updated upstream
  router.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

      pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password],
      (err, result) => {
        if(err){
          res.send({ err:err });
        }

        if(result){
          res.send(result.rows);
        }else{
          res.send({message: "wrong credentials"})
        }
      })
    })
=======
  router.post('/login', async( req, res) =>{
    try{
      const{email,password} = req.body;
      const user = await pool.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]) 

      if(user.rows.length === 0){
       return res.status(401).json("email or password is incorrect")
      }
    } catch (error){
      console.log
    }
  })
>>>>>>> Stashed changes

  router.get('/post', fetchPost)

  router.post('/post', makeAPost)


module.exports = router;