const express = require('express');
const messageController = require('./controllers/messageController');

const router = express.Router();

router.get('/messages', messageController.getAllMessages);
router.post('/messages', messageController.createMessage);

module.exports = router;