const router = require('express').Router(); 
<<<<<<< HEAD
const {fetchUsers, userLogin, fetchPosts, makeAPost, updatePost, getPost, deletePost, createComment,registerUser }  = require('../controller/douladoController');
=======
const {fetchUsers, userLogin, fetchPosts, makeAPost, updatePost, getPost, deletePost, createComment, findAllClinics }  = require('../controller/douladoController');
>>>>>>> 314d0fc7eec97a68d7ddec0dab8b2cf98f362e62

//gets all users
router.get('/users', fetchUsers);

//Register users
router.post('/register/:id', registerUser)

//logs in
router.post('/login', userLogin);

//gets all posts
router.get('/posts', fetchPosts);

//gets single post
router.get('/post/:id', getPost);

//creates a post
router.post('/post', makeAPost);

//update a post
router.put('/post/:id', updatePost);

//delete a post
router.delete('/post/:id', deletePost);

//create a comment
router.post('/post/:id/comment', createComment);

//get All Clinics
router.get('/clinics', findAllClinics);

module.exports = router;