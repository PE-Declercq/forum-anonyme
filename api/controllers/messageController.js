const db = require('../config').db;
const mysql = require('mysql2');

const pool = mysql.createPool(db);
const promisePool = pool.promise();

const messageController = {
  getAllMessages: async (req, res) => {
    try {
      const [rows] = await promisePool.query('SELECT * FROM messages');
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: 'Database query failed' });
    }
  },
  createMessage: async (req, res) => {
    try {
      const { text, pseudonym } = req.body;
      const [result] = await promisePool.execute('INSERT INTO messages (text, pseudonym) VALUES (?, ?)', [text, pseudonym]);
      res.status(201).json({ message: 'Message created', messageId: result.insertId });
    } catch (err) {
      res.status(500).json({ error: 'Database query failed' });
    }
  },
};

module.exports = messageController;