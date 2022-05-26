const db = require('../db/db');

class ChatModel {
    static getChatFromDb = (senderId, receiverId) => db.select().from('chat').where(db.raw(`(sender_id = ${senderId} and receiver_id = ${receiverId}) or (sender_id = ${receiverId} and receiver_id = ${senderId})`));
    static createChatFromDb = (sender_id, receiver_id, message) => db('chat').insert({sender_id, receiver_id, message}).returning('*');
}

module.exports = ChatModel;