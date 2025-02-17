const express = require('express');
//const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const methodOverride = require('method-override');

const userModel = require('./Models/User');

const app = express();

const PORT = 3000;
const db = 'mongodb://kuxna:fh6sU7C2yu@127.0.0.1:27017/kuxna?authSource=admin';

mongoose
.connect(db)
.then((res) => console.log('Connected to DB'))
.catch((error) => console.log(error));

app.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
});

//app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());

app.post('/api/data', async (req, res) => {
    const { name, email, photo } = req.body;
    const newUser = new userModel({
        username: name,
        email: email,
        photo: photo 
    });
    newUser.save();
});

/*app.get('/cookie',function(req, res){
    const cookie_name = 'name';
    res.cookie(cookie_name, 'cookie_value', { httpOnly: true, secure: true });
    res.send('cookie has been set!');
});*/