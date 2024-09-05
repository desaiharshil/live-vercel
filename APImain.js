const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const cors= require('cors');

app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }))

app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Todo app" });
});

require('./APIroute')(app);

app.listen(3002, () => {
    console.log("API call started");
});

