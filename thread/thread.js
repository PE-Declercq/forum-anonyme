const express = require('express');
const axios = require('axios');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://api:3000/messages');
        res.render('index', { messages: response.data });
    } catch (error) {
        res.send('Error fetching messages');
    }
});

const port = 80;
app.listen(port, () => {
    console.log(`Thread service running on port ${port}`);
});