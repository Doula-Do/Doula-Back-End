const router = require("express").Router();
const {
  fetchUsers,
  login,
  fetchPosts,
  makeAPost,
  updatePost,
  getPost,
  deletePost,
  createComment,
  getAllComments,
  deleteAComment,
  registerUser,
  findAllClinics,
  getSingleUser,
} = require("../controller/douladoController");

//gets all users
router.get("/users", fetchUsers);

//get single user
router.get('/user/:id', getSingleUser);

//Register users
router.post('/register', registerUser);

//logs in
router.post("/login", login);

//gets all posts
router.get("/posts", fetchPosts);

//gets single post
router.get("/post/:id", getPost);

//creates a post
router.post("/post", makeAPost);

//update a post
router.put("/post/:id", updatePost);

//delete a post
router.delete("/post/:id", deletePost);

//create a comment
router.post("/post/:id/comment", createComment);

//get all comments
router.get('/comments', getAllComments)

//delete a comment
router.delete("/comment/:id", deleteAComment);

//get All Clinics
router.get("/clinics", findAllClinics);

module.exports = router;