const router = require('express').Router(); 
const {fetchUsers, userLogin, fetchPosts, makeAPost, updatePost, getPost, deletePost }  = require('../controller/douladoController');

//gets all users
router.get('/users', fetchUsers);

//logs in
router.post('/login', userLogin);

//gets all posts
router.get('/posts', fetchPosts);

//gets single post
router.get('/post/:id', getPost)

//creates a post
router.post('/post', makeAPost);

//update a post
router.put('/post/:id', updatePost);

//delete a post
router.delete('/post/:id', deletePost);

module.exports = router;