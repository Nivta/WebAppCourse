const express = require('express')
const app = express();
const dotenv=require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db = mongoose.Connection
db.on('error', error=>{console.error(error)})
db.once('open', ()=>console.log('connected to mongo'))
const PORT =process.env.PORT
const post_routes = require('./routes/post_routes')
app.use('/post',post_routes)
app.listen(PORT,()=>{
    console.log('Example app listening on port' + PORT);
});