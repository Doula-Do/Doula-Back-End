const router = require('express').Router(); 
// const pool = require('../db/db')
const { fetchPost, makeAPost }  = require('../controller/douladoController');

var Pool = require('pg').Pool;

var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'doulasocial',
    password: '',
    port: 5432,
});

router.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
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

  router.get('/post', fetchPost)

  router.post('/post', makeAPost)


module.exports = router;