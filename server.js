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

const PORT = 3002;

const MONGODB_URI = process.env.PORT || 3002;
mongoose.connect(MONGODB_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

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
app.use('/', (req,res) => {
  res.redirect('/home')
})

app.get('/', (req,res) => {
  res.render('index.ejs')
});

//=========
// Listener
//=========

app.listen(PORT, () => {
console.log( '🍒🍋Listening on port🥝🍉:', PORT)
});
