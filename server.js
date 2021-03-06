//=============
// Dependencies
//=============

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const db = mongoose.connection;
require('dotenv').config()

//================
// Database & PORT
//================

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3002;
<<<<<<< HEAD
mongoose.connect(MONGODB_URI ,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false }
);

=======
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);
>>>>>>> cdcee1d49a8b3883cef0babafa02518c788432aa

//========
// Errors
//========

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//===========
// Middleware
//===========

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

//=======
// Routes
//=======
<<<<<<< HEAD
// app.use('/', (req,res) => {
//   res.redirect('/home')
// })
=======
>>>>>>> cdcee1d49a8b3883cef0babafa02518c788432aa

app.get('/', (req,res) => {
  res.render('index.ejs')
});

//=========
// Listener
//=========

app.listen(PORT, () => {
console.log( '🍒🍋Listening on port🥝🍉:', PORT)
});
