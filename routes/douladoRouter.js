const router = require('express').Router(); 
const {fetchUsers, userLogin, fetchPost, makeAPost }  = require('../controller/douladoController');

  router.get('/users', fetchUsers)
  
  router.post('/login', userLogin)

  router.get('/post', fetchPost)

  router.post('/post', makeAPost)

  router.put('/post/:id')

module.exports = router;