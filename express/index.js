const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const Post = require("./modules/Post")
const User = require('./modules/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'asd13ghdassdfdsfgdfgd';

const corsOpts = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
  allowedHeaders: ['Content-Type'],
  exposedHeaders: ['Content-Type']
};

app.use(cors(corsOpts));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://zabumaphu:jwyPwYkOS5bwHPae@cluster0.kd2jcqv.mongodb.net/');

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
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;
      const {title, summary, content} = req.body;
      const postDoc = await Post.create({
        title,
        summary,
        content,
        author: info.id,
      })
      res.json(postDoc);
    });

   
  });

 app.get('/post', async (req, res) => {
  res.json(await (Post.find().populate('author', ['username'])).sort({createdAt: -1}));
 })

 app.get('/post/:id', async (req, res) => {
  const {id} = req.params;
  const postDoc = await Post.findById(id);
  res.json(postDoc);
 })

app.listen(4000);