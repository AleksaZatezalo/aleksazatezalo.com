const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const Post = require("./modules/Post")
const User = require('./modules/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = 'asd13ghdassdfdsfgdfgd';

app.use(cors({credentials:true, origin:"http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());

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

app.post('/login', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // logged in
      jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id:userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json('wrong credentials');
    }
  });

  app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
      if (err) throw err;
      res.json(info);
    });
  });

  app.post('/logout', (req,res) => {
    res.cookie('token', "").json({
      id:userDoc._id,
      username,
    });
  });


  app.post('/post', async (req, res) => {
    const {title, summary, content} = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content
    })
    res.json(postDoc);
  });


  // app.post('/post', async (req, res) => {
  //   console.log(req.body);
  //   console.log(title, summary, content);
  //   // Post.create({

  //   // })
  //   res.json({title, summary, content});
  // });

app.listen(4000);