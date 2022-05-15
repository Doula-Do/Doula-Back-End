const router = require('express').Router(); 
const pool = require('../db/db')
const { getAllUsers, fetchPost, makeAPost }  = require('../controller/douladoController');



  router.get('/users', getAllUsers)
  
  router.get('/post', fetchPost)

  router.post('/post', makeAPost)


module.exports = router;