const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'db',
    user: 'user',
    password: 'password',
    database: 'forum'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

app.get('/messages', (req, res) => {
    db.query('SELECT * FROM messages', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.post('/messages', (req, res) => {
    const message = { text: req.body.text, pseudonym: req.body.pseudonym };
    db.query('INSERT INTO messages SET ?', message, (err, result) => {
        if (err) throw err;
        res.send({ message: 'Message added', id: result.insertId });
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`API server running on port ${port}`);
});
