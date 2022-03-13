const express = require('express')
const router=express.Router()
const Post = require('../controllers/post')
router.get('/',Post.getAllPost)
router.post('/',Post.createNewPost)
module.exports=router