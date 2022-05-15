const router = require('express').Router(); 
const pool = require('../db/db')
const { fetchUsers, fetchPost, makeAPost }  = require('../controller/douladoController');



  router.get('/users', fetchUsers)
  
  router.get('/post', fetchPost)

  router.post('/post', makeAPost)


module.exports = router;