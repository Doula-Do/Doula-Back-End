const db = require('../db/db');
const doulaModels = require('../models/douladoModels');

async function userLogin(req, res) {
  try {
    const data = await doulaModels.loginUser();
    res.status(200).json({
      data,
    });
  } catch (err) {
    res.status(404);
    res.json({
      message: "wrong email/password",
    });
  }
}

async function registerUser(req,res){
  try{
    const id = req.params.id
    const { first_name,
      last_name,
      password,
      email,
      gender,
      medicaid} = req.body;
    res.status(200).json({
      data,
    });
  }catch(err ) {
    res.status(404);
      res.json({
        message: "Successfully registered!!!!",
    });
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

module.exports = {
    fetchUsers,
    fetchPosts,
    makeAPost,
    userLogin,
    updatePost,
    getPost,
    deletePost,
    createComment,
    registerUser
}