const doulaModels = require('../models/douladoModels');
const pool = require("../db/db");

// async function fetchUserLogin(req, res) {
//   try {
//     const data = await doulaModels.loginUser();
//     res.json({
//       data,
//     });
//   } catch (err) {
//     res.status(500);
//     res.json({
//       message: "wrong email/password",
//     });
//   }
// }


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

async function fetchPost(req, res) {
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
    if (!user_id && !content ) {
      return res.status(400).json({
        message: "Make a post!!",
      });
    }
    try {
      const todo = await doulaModels.createAPost({
        user_id: user_id,
        content: content,
      });
      res.status(201).json({
      todo,
      });
    } catch (err) {
      res.statusCode = 500;
      res.json({
        message: err.message,
      });
    }
  }



module.exports = {
    fetchUsers,
    fetchPost,
    makeAPost
}