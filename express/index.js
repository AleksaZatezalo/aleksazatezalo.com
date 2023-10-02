const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require('./modules/user')
const cors = require('cors');

app.use(cors);
app.use(express.json());

mongoose.connect('mongodb+srv://zabumaphu:2xAi9d3hUTFT2y2s@cluster0.azc0for.mongodb.net/')

app.post('/register', async (req,res) => {
    const {username, password} = req.body;
    const userDoc = await User.create({username, password});
    res.json(userDoc);
})

app.listen(4000)