const router = require('express').Router(); 
const pool = require('../db/db')
const { fetchPost, makeAPost }  = require('../controller/douladoController');



router.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  router.get('/post', fetchPost)

  router.post('/post', makeAPost)


module.exports = router;