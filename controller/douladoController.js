const pool = require("../db/db_pool");
const doulaModels = require('../models/douladoModels');
const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require('../utils');
const saltRounds = 10;

async function login(req, res) {
  try {
      const { email, password } = req.body;
      const user = await (await pool.query("SELECT * FROM users WHERE email = ($1)", [email])).rows[0];
      if (!user) {
          return res.status(401).json({
              message: "You sure you have the right email?",
          });
      }
      const passwordCorrect = await bcrypt.compare(password, user.password);
      if (!passwordCorrect) {
          return res.status(401).json({
              message: "You sure you have the right password?",
          });
      }
      const token = await generateToken(user.user_id);
      return res.status(200).json({
          user,
          token
      });

  } catch (err) {
      res.status(500).json({
          message: err.message
      })
  }
}

async function authenticateUser (req, res) {
  try{
    const {userToken} = req.body;
    if (!userToken) return res.status(500).json({message: "Not authenticated"});
    const verify = await verifyToken(userToken, "shhhhhhhhhhh");
    return res.status(200).json({isAuth:true});
  }
  catch (err) {
    return res.status(500).json({message: err.message});
  }
}


async function registerUser(req, res){
  const {first_name,
          last_name,
          password,
          email,
          gender,
          medicaid} = req.body
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  if(!first_name && !last_name && !password && !email && !gender && medicaid) {
       return res.status(400).json({
       message: 'Your credentials are required'
  })
  }
  try {
  const userData = await doulaModels.registerUser({first_name:first_name, last_name:last_name, password:hashedPassword, email:email, gender:gender, medicaid:medicaid})
  const token = await generateToken(userData.user_id);
  res.status(201).json({
      data:userData,
      token
  })
  }catch (err) {
       res.status(201).json({
       message:err.message
   })
  }
  }

async function fetchUsers(req, res) {
  try {
    const data = await doulaModels.getAllUsers();
    res.json({
      data,
    });
  } catch (err) {
    res.status(500);
    res.json({
      message: err.message,
    });
  }
}

async function fetchPosts(req, res) {
    try {
      const data = await doulaModels.getAllPost();
      res.json({
        data,
      });
    } catch (err) {
      res.status(500);
      res.json({
        message: err.message,
      });
    }
  }

  async function makeAPost(req, res) {
    const { user_id, content } = req.body;
    if (!user_id || !content ) {
      return res.status(400).json({
        message: "Make a post!!",
      });
    }
    try {
      const post = await doulaModels.createAPost({
        user_id: user_id,
        content: content,
      });
      return res.status(201).json({
      post,
      });
    } catch (err) {
      res.statusCode = 500;
      res.json({
        message: err.message,
      });
    }
  }

  const getPost = async (req, res) => {
    const id = req.params.id;
    const singlePost = await doulaModels.getPost(id);
    if (singlePost.length === 0) return res.status(404).send('Does not exist');
    return res.status(200).json(singlePost[0]);
  }

  const updatePost = async (req, res) => {
    const id = req.params.id;
    const {content} = req.body;
    if (!content) return res.status(404).send('Content does not exist');
    const update = await doulaModels.updatePost(id, content);
    if (update.length === 0) return res.status(404).send('Post does not exist');
    return res.status(201).json(update[0]);
  }

  const deletePost = async (req, res) => {
    const id = req.params.id;
    const findPost = await doulaModels.getPost(id);
    if (findPost.length === 0) return res.status(404).send('Post does not exist');
    await doulaModels.deletePost(id);
    return res.status(202).json(findPost);
  }

  const createComment = async (req, res) => {
    const post_id = req.params.id
    const {user_id, content} = req.body;
    const commenting = await doulaModels.postComment(post_id, user_id, content);
    return res.status(201).json(commenting);
  }

  const getAllComments = async (req, res) => {
    const comments = await doulaModels.getComments();
    return res.status(200).json(comments);
  }

  const deleteAComment = async (req, res) => {
    const id = req.params.id;
    await doulaModels.deleteComment(id);
    return res.status(202).json('Deleted comment.');
  }

  const getSingleUser = async (req, res) => {
    const id = req.params.id;
    const user = await doulaModels.getUser(id);
    if (user.length === 0) return res.status(404).send('User does not exist');
    return res.status(200).json(user); 
  }

  const findAllClinics = async (req, res) => {
    const foundClinics = await doulaModels.findClinics()
    return res.status(200).json(foundClinics);
  }

module.exports = {
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
  authenticateUser,
}