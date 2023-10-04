const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require('./modules/User')
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = '779966aaddffggbbww'
const salt = bcrypt.genSaltSync(10);

app.use(cors);
app.use(express.json());

mongoose.connect('mongodb+srv://zabumaphu:2xAi9d3hUTFT2y2s@cluster0.azc0for.mongodb.net/')
app.listen(4000)

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    //res.json(userDoc);
    const passwordOk = bcrypt.compareSync(password, userDoc.password);
    //res.json(passOk);
    if (passOk){
        // Logged in
        jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token',token).json('ok');
        });
        // res.json();
    } else {
        res.status(400).json('Try Harder');
    }
})