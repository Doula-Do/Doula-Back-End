const express = require("express");
const router = express.Router();
const ChatController = require("../controller/ChatController");

router.get("/user/:senderId/chat/:receiverId", ChatController.getChat);
router.post("/user/:senderId/chat/:receiverId", ChatController.createChat);

module.exports = router;