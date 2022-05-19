const router = require('express').Router(); 
const {fetchUsers, userLogin, fetchPosts, makeAPost, updatePost, getPost, deletePost, createComment, getAllComments, deleteAComment }  = require('../controller/douladoController');

//gets all users
router.get('/users', fetchUsers);

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

//get all comments
router.get('/comments', getAllComments);

//delete a comment
router.delete('/comment/:id', deleteAComment);

module.exports = router;