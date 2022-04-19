const {request}=require('express')
const Post = require('../models/post_model')

const getAllPost = async (req, res) => {
    console.log('getAllPost')
    try {
        
        const sender = req.query.sender
        var posts
        if(sender!=null| sender!=undefined){
             posts = await Post.find({'sender' : sender})  
        }
        else{
             posts = await Post.find()
        }
        res.status(200).send(posts)
    } catch (err) {
        res.status(400).send({
            'message': err.message
        })

    }
}
const getPostById = async (req, res) => {
    console.log('getPostById id=' + req.params.id)
    const id = req.params.id
    if (id == null | id == undefined) {
        return res.status(400).send({ 'err': 'no id provided' })
    }
    try {
        posts = await Post.findById(id)
        res.status(200).send(posts)
    } catch (err) {
        res.status(400).send({
            'message': err.message
        })

    }
}
const createNewPost = async (req, res) => {
    console.log(req.body)
    const post = Post({
        message: req.body.message,
        sender: req.body.sender
    })
    try {
        newPost = await post.save()
        res.status(200).send(newPost)
    } catch (err) {
        res.status(400).send({
            'status': 'faile',
            'message': err.message
        })

    }

}
module.exports =
{
    getAllPost,
    createNewPost,
    getPostById
}