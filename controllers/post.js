

const getAllPost = (req,res)=>{
    res.send('app get post') 
}
const createNewPost = (req,res)=>{
    res.send('app post post')
}
module.exports = 
{   
    getAllPost,
    createNewPost
}