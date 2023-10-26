const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.post('/register', (req, res) => {
    res.json('test ok2');
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