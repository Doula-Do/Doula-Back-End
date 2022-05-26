const ChatModel = require('../models/ChatModel');

class ChatController {
    static getChat = async (req, res) => {
        const {senderId, receiverId} = req.params;
        const chatArray = await ChatModel.getChatFromDb(senderId, receiverId);
        return res.status(200).json(chatArray);
    }

    static createChat = async (req, res) => {
        const {senderId, receiverId} = req.params;
        const {message} = req.body;
        const newChat = await ChatModel.createChatFromDb(senderId, receiverId, message);
        return res.status(201).json(newChat);
    }
}

module.exports = ChatController;