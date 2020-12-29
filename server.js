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

const MONGODB_URI = process.env.PORT || 3002;
mongoose.connect(MONGODB_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
