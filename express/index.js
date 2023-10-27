const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./modules/User');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://zabumaphu:jwyPwYkOS5bwHPae@cluster0.kd2jcqv.mongodb.net/');
// zabumaphu
// jwyPwYkOS5bwHPae
// mongodb+srv://zabumaphu:jwyPwYkOS5bwHPae@cluster0.kd2jcqv.mongodb.net/

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({username, 
            password:bcrypt.hashSync(password, salt)})
        res.json(userDoc);
    } catch(e) {
        res.status(400).json(e)
    }

});

app.listen(4000);

// app.post('/login', async (req, res) => {
//     const {username, password} = req.body;
//     const userDoc = await User.findOne({username});
//     //res.json(userDoc);
//     const passwordOk = bcrypt.compareSync(password, userDoc.password);
//     //res.json(passOk);
//     if (passOk){
//         // Logged in
//         jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
//             if (err) throw err;
//             res.cookie('token',token).json('ok');
//         });
//         // res.json();
//     } else {
//         res.status(400).json('Try Harder');
//     }
// })