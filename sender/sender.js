const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/form.html');
});

app.post('/send', (req, res) => {
    const message = {
        text: req.body.text,
        pseudonym: req.body.pseudonym
    };

    axios.post('http://api:3000/messages', message)
        .then(() => res.send('Message sent successfully'))
        .catch(() => res.send('Failed to send message'));
});

const port = 8080;
app.listen(port, () => {
    console.log(`Sender service running on port ${port}`);
});